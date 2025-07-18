Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });

describe('Advance.Cash Login Flow', () => {
  it('Should navigate to the login page and attempt login', () => {
  
    cy.visit('https://www.advance-cash.polymorphic-sandbox.com');  
    cy.contains('Sign In').click(); 
    cy.url().should('include', '/sign-in');
    cy.wait(3000);

    cy.get('#email_input').type('TestingTesting1@Gmail.com');
    cy.get('input[type="password"]').type('Asdasd123!');

    cy.get('button').contains('Sign in').click();
    cy.wait(3000);

    cy.get('.ps-md-3 > .row').should('be.visible');
    cy.get('.member-area > .card').should('be.visible')
  });
});
