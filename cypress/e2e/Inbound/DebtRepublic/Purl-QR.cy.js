describe('Debthunch Automation', () => {

    it('Debt Amount Apply PURL', () => {
        cy.visit('https://debtrepublic.com/P2RK49N');

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(3000);

        cy.get('h1').should('contain.text',"Test, you've been matched with the smartest debt consolidation available.");
    });
    

    it('Debt Amount Apply QR', () => {
        cy.visit('https://www.debtrepublic.com/form?personal_key=455259235&utm_source=&utm_campaign=&utm_medium=purl&utm_content=');

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(3000);

        cy.get('h1').should('contain.text',"Test, you've been matched with the smartest debt consolidation available.");
    });
});