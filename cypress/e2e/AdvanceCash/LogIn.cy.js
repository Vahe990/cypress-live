Cypress.on('uncaught:exception', () => false);

const BASE_URL = 'http://localhost:8082';
const VALID_EMAIL = 'team@polymorphic.io';
const VALID_PASSWORD = 'Asdasd123!';

function visitSignIn() {
  cy.visit(`${BASE_URL}/sign-in`);
  cy.get('.login-form').should('be.visible');
}

function stubRecaptcha() {
  cy.window().then((win) => {
    win.grecaptcha = {
      getResponse: () => 'test-captcha-token',
      reset: () => {},
    };
  });
}

function fillLoginForm(email, password) {
  if (email) cy.get('#email_input').clear().type(email);
  if (password) cy.get('#password').clear().type(password);
}

function clickSignIn() {
  cy.get('#sign_in').click();
}

describe('Login Flow', () => {
  context('positive flow', () => {
    it('logs in directly (no MFA) and redirects to profile', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 200,
        body: { method: 'none' },
      }).as('tryLogin');

      cy.intercept('POST', '**/api/authenticate-user', {
        statusCode: 200,
        body: {},
      }).as('authenticate');

      visitSignIn();
      stubRecaptcha();
      fillLoginForm(VALID_EMAIL, VALID_PASSWORD);
      clickSignIn();

      cy.wait('@tryLogin').its('request.body').should('include', 'team%40polymorphic.io');
      cy.wait('@authenticate');
    });

    it('completes MFA via email and redirects to profile', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 200,
        body: { method: 'email', email: VALID_EMAIL },
      }).as('tryLogin');

      cy.intercept('POST', '**/api/check-login-verification-code', {
        statusCode: 200,
        body: {},
      }).as('checkCode');

      cy.intercept('POST', '**/api/authenticate-user', {
        statusCode: 200,
        body: {},
      }).as('authenticate');

      visitSignIn();
      stubRecaptcha();
      fillLoginForm(VALID_EMAIL, VALID_PASSWORD);
      clickSignIn();

      cy.wait('@tryLogin');
      cy.get('.login-form').should('have.class', 'd-none');
      cy.get('.verification-form').should('not.have.class', 'd-none');
      cy.get('.method-info').should('contain.text', 'sent to');

      cy.get('#code').type('123456');
      cy.get('#check_code').click();

      cy.wait('@checkCode').its('request.body').should('include', 'code=123456');
      cy.wait('@authenticate');
    });

    it('completes MFA via phone and redirects to profile', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 200,
        body: { method: 'phone', phone: '5551234567' },
      }).as('tryLogin');

      cy.intercept('POST', '**/api/check-login-verification-code', {
        statusCode: 200,
        body: {},
      }).as('checkCode');

      cy.intercept('POST', '**/api/authenticate-user', {
        statusCode: 200,
        body: {},
      }).as('authenticate');

      visitSignIn();
      stubRecaptcha();
      fillLoginForm(VALID_EMAIL, VALID_PASSWORD);
      clickSignIn();

      cy.wait('@tryLogin');
      cy.get('.login-form').should('have.class', 'd-none');
      cy.get('.verification-form').should('not.have.class', 'd-none');
      cy.get('.method-info').should('contain.text', 'texted to');

      cy.get('#code').type('654321');
      cy.get('#check_code').click();

      cy.wait('@checkCode').its('request.body').should('include', 'code=654321');
      cy.wait('@authenticate');
    });

    it('shows method selection when account has both phone and email MFA, and completes via email', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 200,
        body: { method: 'check', phone: '5551234567', email: VALID_EMAIL },
      }).as('tryLogin');

      cy.intercept('POST', '**/api/code-method', {
        statusCode: 200,
        body: { method: 'email', email: VALID_EMAIL },
      }).as('codeMethod');

      cy.intercept('POST', '**/api/check-login-verification-code', {
        statusCode: 200,
        body: {},
      }).as('checkCode');

      cy.intercept('POST', '**/api/authenticate-user', {
        statusCode: 200,
        body: {},
      }).as('authenticate');

      visitSignIn();
      stubRecaptcha();
      fillLoginForm(VALID_EMAIL, VALID_PASSWORD);
      clickSignIn();

      cy.wait('@tryLogin');
      cy.get('.choose-method-form').should('not.have.class', 'd-none');

      cy.get('label[for="email_method"]').click();

      cy.wait('@codeMethod').its('request.body').should('include', 'receiveMethod=email');
      cy.get('.verification-form').should('not.have.class', 'd-none');

      cy.get('#code').type('111222');
      cy.get('#check_code').click();

      cy.wait('@checkCode');
      cy.wait('@authenticate');
    });
  });

  context('negative flow', () => {
    beforeEach(() => {
      visitSignIn();
      stubRecaptcha();
    });

    it('stays on sign-in page when email is empty', () => {
      cy.get('#password').type(VALID_PASSWORD);
      clickSignIn();

      cy.get('.login-form').should('be.visible');
      cy.url().should('include', '/sign-in');
      cy.get('#email_input').should('have.class', 'error');
    });

    it('stays on sign-in page when password is empty', () => {
      cy.get('#email_input').type(VALID_EMAIL);
      clickSignIn();

      cy.get('.login-form').should('be.visible');
      cy.url().should('include', '/sign-in');
      cy.get('#password').should('have.class', 'error');
    });

    it('stays on sign-in page when both fields are empty', () => {
      clickSignIn();

      cy.get('.login-form').should('be.visible');
      cy.url().should('include', '/sign-in');
      cy.get('#email_input').should('have.class', 'error');
    });

    it('shows error for incorrect credentials', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 400,
        body: {
          errors: { message: 'Incorrect username/email or password' },
        },
      }).as('tryLoginFail');

      fillLoginForm(VALID_EMAIL, 'WrongPassword1!');
      clickSignIn();

      cy.wait('@tryLoginFail');
      cy.get('#password').should('have.class', 'error');
      cy.get('#password').parents('.form-field-wrapper')
        .find('p.form-note.error')
        .should('be.visible')
        .and('contain.text', 'Incorrect username/email or password');
    });

    it('shows account locked message after too many failed attempts (401)', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 401,
        body: {},
      }).as('tryLoginLocked');

      fillLoginForm(VALID_EMAIL, 'WrongPassword1!');
      clickSignIn();

      cy.wait('@tryLoginLocked');
      cy.get('#sign_in').parents('.form-field-wrapper')
        .find('p.form-note.error')
        .should('be.visible')
        .and('contain.text', 'account has been locked');
    });

    it('shows captcha error when recaptcha validation fails (422)', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 422,
        body: { captcha: false },
      }).as('tryLoginCaptcha');

      fillLoginForm(VALID_EMAIL, VALID_PASSWORD);
      clickSignIn();

      cy.wait('@tryLoginCaptcha');
      cy.get('.recaptcha-error-message')
        .should('not.have.class', 'd-none')
        .and('be.visible')
        .and('contain.text', 'Please verify that you are not a');
    });

    it('shows generic error toast on unexpected server error (500)', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 500,
        body: {},
      }).as('tryLoginError');

      fillLoginForm(VALID_EMAIL, VALID_PASSWORD);
      clickSignIn();

      cy.wait('@tryLoginError');
      cy.get('.alert-danger')
        .should('have.class', 'show')
        .and('contain.text', 'error has occurred');
    });

    it('shows error when wrong verification code is submitted', () => {
      cy.intercept('POST', '**/api/try-customer-login', {
        statusCode: 200,
        body: { method: 'email', email: VALID_EMAIL },
      }).as('tryLogin');

      cy.intercept('POST', '**/api/check-login-verification-code', {
        statusCode: 400,
        body: {},
      }).as('checkCodeFail');

      fillLoginForm(VALID_EMAIL, VALID_PASSWORD);
      clickSignIn();

      cy.wait('@tryLogin');
      cy.get('.verification-form').should('not.have.class', 'd-none');

      cy.get('#code').type('000000');
      cy.get('#check_code').click();

      cy.wait('@checkCodeFail');
      cy.get('#code').parents('.form-field-wrapper')
        .find('p.form-note.error')
        .should('be.visible')
        .and('contain.text', 'Your code is wrong');
    });
  });
});
