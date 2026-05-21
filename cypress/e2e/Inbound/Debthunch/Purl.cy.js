describe('Debthunch Automation', () => {

    it('Debt Amount Apply PURL', () => {
        cy.visit('https://debthunch.com/P2RK49N');
        cy.wait(2000);

        cy.url().should('include', 'form');
        cy.url().then((url) => {

            /* ================= FORM v1 ================= */
            if (url.includes('/form') && !url.includes('/form-v2')) {

                cy.get('button[type="submit"]').click();
                cy.wait(3000);

                cy.get('.confirmation-heading').should('contain.text',"Test, you've been matched with the smartest debt consolidation available.");
            }

            /* ================= FORM v2 ================= */
            else if (url.includes('/form-v2')) {

                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(2000);
        
                cy.get('.confirmation-heading').should('contain.text',"Test, you've been matched with the smartest debt consolidation available.");
            }
        });

      cy.get('.confirmation-heading')
        .should('contain.text', "Test, you've been matched with the smartest debt consolidation available.");
    });
});
