describe('My First Test', () => {
    it('Visits the Cypress Documentation Page', () => {
      cy.visit('https://docs.cypress.io') // Navigates to the page
      cy.contains('Introduction').should('be.visible') // Checks for text visibility
    })
  })
  
