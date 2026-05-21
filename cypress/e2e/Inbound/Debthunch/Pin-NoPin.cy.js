describe('Debthunch Automation', () => {

    it('Debt Amount Apply Without PIN', () => {

        cy.visit('https://www.debthunch.com');
        cy.wait(2000);

        cy.get('.elementor-element-f969df2 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .debt-hero > .debt-hero__container > .debt-hero__content > .debt-hero__text > .debt-hero__form > .debt-hero__button-wrapper > .debt-hero__button').click();

        cy.url().should('include', 'form');
        cy.url().then((url) => {

            /* ================= FORM v1 ================= */
            if (url.includes('/form') && !url.includes('/form-v2')) {

                cy.get('[name="currencyFaker"]').type('12733');
                cy.get('[name="credit_score"]').select('Good (660-719)', { force: true });
                cy.get('[name="incomeFaker"]').first().type('100000', { force: true });

                cy.get('[name="first_name"]').type('Test', { force: true });
                cy.get('#lastName').type('Test', { force: true });
                cy.get('#birthday').first().type('06191988', { force: true });
                cy.get('#phoneNumber').first().type('7166309856', { force: true });
                cy.get('#emailAddress').first().type('test+danika87@jacobi.org', { force: true });

                cy.get('#streetAddress').first().type('0662 Gavin Gardens', { force: true });
                cy.get('#aptNumber').first().type('062', { force: true });
                cy.get('#city').first().type('Erdmanmouth', { force: true });
                cy.get('#state').select('AL', { force: true });
                cy.get('#zip').first().type('55555', { force: true });

                cy.get('button[type="submit"]').click();
            }

            /* ================= FORM v2 ================= */
            else if (url.includes('/form-v2')) {

                cy.get('[name="debt_amount_display"]').type('12733');
                cy.get('[name="annual_income_display"]').type('100000', { force: true });
                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('[name="first_name"]').type('Test', { force: true });
                cy.get('[name="last_name"]').type('Test', { force: true });
                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('#dob')
                  .invoke('val', '1995-06-15')
                  .trigger('change');

                cy.get('[name="phone"]').type('7166309856', { force: true });
                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('[name="email"]').type('test+danika87@jacobi.org', { force: true });
                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
                cy.wait(500);

                cy.get('[name="street_address"]').type('0662 Gavin Gardens', { force: true });
                cy.get('[name="apt"]').type('062', { force: true });
                cy.get('[name="city"]').type('Erdmanmouth', { force: true });
                cy.get('[name="state"]').select('AL', { force: true });
                cy.get('[name="zip"]').type('55555', { force: true });
                cy.get('.active > .msf-buttons-wrapper > .msf-button').click();
            }

        });

      cy.get('.confirmation-heading')
        .should('contain.text', "Test, you've been matched with the smartest debt consolidation available.");
    });
    

    it('Debt Amount Apply With PIN', () => {

        cy.visit('https://www.debthunch.com');
        cy.wait(2000);

        cy.get('#debt-hero-checkbox').click();
        cy.get('input[class="debt-hero__personal-key-input"]').type('455259235');
        cy.get('.elementor-element-f969df2 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .debt-hero > .debt-hero__container > .debt-hero__content > .debt-hero__text > .debt-hero__form > .debt-hero__button-wrapper > .debt-hero__button').click();

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
