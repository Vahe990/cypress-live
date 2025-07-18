describe('Debthunch Automation', () => {

    it('Debt Amount Apply', () => {
        cy.visit('https://stgdebthunch:stgdebthunch@stgdebthunch.wpengine.com');

    //  first page
        cy.get(':nth-child(4) > .col > .block > .invalid').click()
        cy.wait(5000)

    //  second page
        cy.get('.form-group.ng-scope > .row > :nth-child(1) > .input-group > .ng-valid').type('56700', {force: true});
        cy.get('select[name="credit_score"]').select('Good (660-719)', {force: true});
        cy.get('input[id="annualIncome"]').first().type('6500', {force: true});

        cy.get('input[id="firstName"]').first().type('Testname', {force: true});
        cy.get('input[id="lastName"]').first().type('TestlastName', {force: true});
        cy.get('input[id="birthday"]').first().type('12121988', {force: true});
        cy.get('input[id="phoneNumber"]').first().type('9567566678', {force: true});
        cy.get('input[id="emailAddress"]').first().type('test@testing.no', {force: true});
        cy.get('input[id="streetAddress"]').first().type('25 asd qw', {force: true});
        cy.get('input[id="aptNumber"]').first().type('40', {force: true});
        cy.get('input[id="city"]').first().type('DebtLand', {force: true});
        cy.get('select[id="state"]').select('AK', {force: true});
        cy.get('input[id="zip"]').first().type('19678', {force: true});

        cy.get('button[type="submit"]').click();
        cy.wait(5000);

        cy.get('div[class="text-center"]').should('be.visible');
    });
});
