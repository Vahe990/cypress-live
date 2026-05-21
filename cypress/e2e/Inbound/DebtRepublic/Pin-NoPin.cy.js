describe('Debthunch Automation', () => {

    it('Debt Amount Apply Without PIN', () => {
        cy.visit('https://debtrepublic.com');

    //  home page
        cy.get('.offers-form > .button-red').click()
        cy.wait(2000)

    //  form step pages
        cy.get('[name="debt_amount"]').type('12733', {force: true});
        cy.get('[name="annual_income"]').type('100000', {force: true});
        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('[name="first_name"]').type('Test', {force: true});
        cy.get('[name="last_name"]').type('Test', {force: true});
        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('[name="date_of_birth"]').type('06191988', {force: true});
        cy.get('[name="phone_number"]').type('7166309856', {force: true});
        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('[name="email_address"]').type('test+danika87@jacobi.org', {force: true});
        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('[name="address"]').type('0662 Gavin Gardens', {force: true});
        cy.get('[name="address2"]').type('062', {force: true});
        cy.get('[name="city"]').type('Erdmanmouth', {force: true});
        cy.get('[name="state"]').select('AL', {force: true});
        cy.get('[name="zip"]').type('55555', {force: true});
        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(3000);

        cy.get('h1').should('contain.text',"Test, you've been matched with the smartest debt consolidation available.");
    });
    

    it('Debt Amount Apply With PIN', () => {
        cy.visit('https://debtrepublic.com');

    //  home page
        cy.get('.personal-key > a').click();
        cy.get('[name="personal_key"]').type('455259235');
        cy.get('.offers-form > .button-red').click()
        cy.wait(2000)

    //  form step pages
        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(500);

        cy.get('.step-item.active > .step-content > .button-red').click();
        cy.wait(3000);

        cy.get('h1').should('contain.text',"Test, you've been matched with the smartest debt consolidation available.");
    });
});