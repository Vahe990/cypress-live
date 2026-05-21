Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });

describe('Advance.Cash Application Test', () => {

  it('Redirect to Offer Page with /preapproval', () => {
    // Check with Mailer code
    cy.visit('https://advance-cash.polymorphic-sandbox.com/preapproval');
    cy.wait(1000);

    cy.get('#mailer_code_toggler').should('not.be.visible');
    cy.get('#promoid').type('G53222TAH');
    cy.get('#promocode_submit').click();
    cy.wait(5000);

    cy.url().should('include', '/offer?promoid=G53222TAH');

    // Check with zip & SSN
    cy.visit('https://advance-cash.polymorphic-sandbox.com/preapproval');
    cy.wait(1000);

    cy.get('#mailer_code_toggler').should('not.be.visible');
    cy.get('#zip_code').type('70805');
    cy.get('#ssn').type('7572805');
    cy.get('#zip_ssn_submit').click();
    cy.wait(5000);

    cy.url().should('include', '/offer?promoid=G53222TAH');
  });

  it('Redirect to Offer Page with /preapproval?aaa=bbb', () => {
    // Check with Mailer code
    cy.visit('https://advance-cash.polymorphic-sandbox.com/preapproval?aaa=bbb');
    cy.wait(1000);

    cy.get('#mailer_code_toggler').should('not.be.visible');
    cy.get('#promoid').type('G53222TAH');
    cy.get('#promocode_submit').click();
    cy.wait(5000);

    cy.url().should('include', '/offer?promoid=G53222TAH&aaa=bbb');

    // Check with zip & SSN
    cy.visit('https://advance-cash.polymorphic-sandbox.com/preapproval?aaa=bbb');
    cy.wait(1000);

    cy.get('#mailer_code_toggler').should('not.be.visible');
    cy.get('#zip_code').type('70805');
    cy.get('#ssn').type('7572805');
    cy.get('#zip_ssn_submit').click();
    cy.wait(5000);

    cy.url().should('include', '/offer?promoid=G53222TAH&aaa=bbb');
  });
});
