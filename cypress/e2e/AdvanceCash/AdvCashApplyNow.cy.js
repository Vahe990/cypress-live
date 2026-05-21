Cypress.on('uncaught:exception', () => false);

const BASE_URL = 'https://advance-cash.polymorphic-sandbox.com';

function visitApplyToday() {
  cy.visit(`${BASE_URL}/apply-today`);
  cy.get('.ac-multistep-form').should('be.visible');
  cy.get('.form-step[data-step="1"]').should('have.class', 'active');
}

function fillBasicInfo() {
  cy.get('#first_name').type('Vah');
  cy.get('#last_name').type('Simon');
  cy.get('#ssn').type('123456789');
  cy.get('#email').type('test@test.com');
  cy.get('#valid_driver_license').type('G1767880');
  cy.get('#dob').type('03/14/1989').blur();
  cy.get('#state_issued').select('DE');
}

function fillAddress() {
  cy.get('#user_address').type('59 Wywie St');
  cy.get('#city').type('Tytycie');
  cy.get('#state').select('Alabama');
  cy.get('#zip').type('12349');
  cy.get('#home_phone').type('2727860655');
}

function fillBanking() {
  cy.get('.bank-account.primary').within(() => {
    cy.get('input[name="aba_number"]').type('011000015');
    cy.get('input[name="bank_name"]').type('NormBank');
    cy.get('input[name="account_number"]').type('1234567890');
    cy.get('select[name="account_type"]').select('SavingsAccount');
    cy.get('select[name="year_with_this_account"]').select('5');
    cy.get('select[name="months_with_this_account"]').select('9');
  });
}

function fillIncome({ checkAgreements = true } = {}) {
  cy.get('.income-info.primary').within(() => {
    cy.get('input[name="monthly_income"]').type('6666');
    cy.get('select[name="source"]').select('Social Security');
    cy.get('select[name="payroll_type"]').select('Cash');
    cy.get('select[name="pay_frequency_type"]').select('Weekly');
    cy.get('input[name="day_of_week"]').invoke('val', '12/31/2026').trigger('change');
  });

  if (checkAgreements) {
    cy.get('#check_privacy').check({ force: true });
    cy.get('#check_condition').check({ force: true });
  }
}

function clickNext() {
  cy.get('.btn-next:visible').click();
}

function expectActiveStep(step) {
  cy.get(`.form-step[data-step="${step}"]`).should('have.class', 'active').and('be.visible');
}

function expectInactiveStep(step) {
  cy.get(`.form-step[data-step="${step}"]`).should('not.have.class', 'active');
}

describe('Apply Today multi-step form', () => {
  context('positive flow', () => {
    it('walks through all five steps and submits successfully', () => {
      cy.intercept('POST', '**/api/apply-loan', {
        delay: 500,
        body: JSON.stringify({ result: 'accept', redirect_url: '/confirmation' }),
      }).as('applyLoan');

      visitApplyToday();

      fillBasicInfo();
      clickNext();
      expectActiveStep(2);

      fillAddress();
      clickNext();
      expectActiveStep(3);

      fillBanking();
      clickNext();
      expectActiveStep(4);

      fillIncome();
      clickNext();
      expectActiveStep(5);

      cy.get('#summary-first-name').should('have.text', 'Vah');
      cy.get('#summary-last-name').should('have.text', 'Simon');
      cy.get('#summary-email').should('have.text', 'test@test.com');
      cy.get('#summary-bank-name').should('have.text', 'NormBank');

      cy.get('#final_check_privacy').should('be.checked');
      cy.get('#final_check_condition').should('be.checked');

      cy.get('#apply_long_form').should('be.visible').and('not.be.disabled').click();

      cy.wait('@applyLoan').its('request.body').should('include', 'customer%5Bfirst_name%5D=Vah');
    });
  });

  context('negative flow — empty or invalid steps block navigation', () => {
    beforeEach(() => {
      visitApplyToday();
    });

    it('stays on step 1 when basic info is empty', () => {
      clickNext();
      expectActiveStep(1);
      expectInactiveStep(2);
      cy.get('.form-step[data-step="1"] .error, .form-step[data-step="1"] .form-note.error').should('exist');
    });

    it('stays on step 2 when address is empty', () => {
      fillBasicInfo();
      clickNext();
      expectActiveStep(2);

      clickNext();
      expectActiveStep(2);
      expectInactiveStep(3);
    });

    it('stays on step 3 when banking info is empty', () => {
      fillBasicInfo();
      clickNext();
      fillAddress();
      clickNext();
      expectActiveStep(3);

      clickNext();
      expectActiveStep(3);
      expectInactiveStep(4);
    });

    it('stays on step 4 when income is filled but agreement boxes are not checked', () => {
      fillBasicInfo();
      clickNext();
      fillAddress();
      clickNext();
      fillBanking();
      clickNext();
      expectActiveStep(4);

      fillIncome({ checkAgreements: false });
      clickNext();
      expectActiveStep(4);
      expectInactiveStep(5);
    });
  });

  context('submit button can only be pressed once', () => {
    it('disables the submit button after the first click and ignores repeated clicks', () => {
      let requestCount = 0;
      cy.intercept('POST', '**/api/apply-loan', (req) => {
        requestCount += 1;
        req.reply({
          delay: 3000,
          body: JSON.stringify({ result: 'accept', redirect_url: '/confirmation' }),
        });
      }).as('applyLoan');

      visitApplyToday();

      fillBasicInfo();
      clickNext();
      fillAddress();
      clickNext();
      fillBanking();
      clickNext();
      fillIncome();
      clickNext();
      expectActiveStep(5);

      cy.get('#apply_long_form').should('not.be.disabled').click();

      // The button must become disabled before the in-flight API call resolves,
      // so a normal user can't fire a second submission while the first is still pending.
      cy.get('#apply_long_form').should('be.disabled');

      cy.wait('@applyLoan');
      cy.then(() => {
        expect(requestCount, 'apply-loan API should be called exactly once').to.equal(1);
      });
    });
  });
});
