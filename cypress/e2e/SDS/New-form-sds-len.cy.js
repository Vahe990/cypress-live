Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });  

describe('Loan Bidding Site Automation', () => {
    beforeEach(() => {
        cy.viewport(1600,940);
    });
    it('Try Lendwyse/sf', () => {
        cy.visit('https://polymorphic:polymorphic2021@trylendwyse.polymorphic-sandbox.com/sf');

        cy.get('input[value="40000"]').click();
        cy.get('.step1 > .fieldset-content > .next-step').click();
        cy.wait(2000);

        cy.get('input[value="Debt Consolidation"]').click();
        cy.wait(2000);

        cy.get('input[value="I owe LESS THAN $20,000"]').click({force: true});
        cy.wait(1500);
        cy.get('.step3 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[value="Yes, I am"]').click({force: true});
        cy.wait(1500);
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="annual_income"]').type('65000');
        cy.get('input[value="Bi-Weekly"]').click();
        cy.get('.step4 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('12121990');
        cy.get('.step5 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('7436502222');
        cy.get('input[name="home_address"]').type('1st Good st');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('#state').select('NY');
        cy.get('input[name="zip_code"]').type('23234');
        cy.get('.step6 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('a.show-additional-reviews').click()
        cy.get('div[class="review-content"]').should('be.visible');
        cy.get('.step7 > .fieldset-content > .next-step').click();
        cy.wait(6000);

        cy.get('#ssn').type('123456789');
        cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(21000);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });

    it('Try Lendwyse/sfl', () => {
        cy.visit('https://polymorphic:polymorphic2021@trylendwyse.polymorphic-sandbox.com/sfl');

        cy.get('input[value="40000"]').click();
        cy.get('.step1 > .fieldset-content > .next-step').click();
        cy.wait(2000);

        cy.get('input[value="Debt Consolidation"]').click();
        cy.wait(2000);

        cy.get('input[name="annual_income"]').type('65000');
        cy.get('input[value="Bi-Weekly"]').click();
        cy.get('.step3 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('12121990');
        cy.get('.step4 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('7436502222');
        cy.get('input[name="home_address"]').type('1st Good st');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('#state').select('NY');
        cy.get('input[name="zip_code"]').type('23234');
        cy.get('.step5 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('a.show-additional-reviews').click()
        cy.get('div[class="review-content"]').should('be.visible');
        cy.get('.step6 > .fieldset-content > .next-step').click();
        cy.wait(6000);

        cy.get('#ssn').type('123456789');
        cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(21000);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });

    it('Try Lendwyse/lf', () => {
        cy.visit('https://polymorphic:polymorphic2021@trylendwyse.polymorphic-sandbox.com/lf');

        cy.get('.step1 > .fieldset-content > .form-content > :nth-child(1) > #first_name').type('Daniel');
        cy.get('.step1 > .fieldset-content > .form-content > :nth-child(2) > #last_name').type('Drozdov');
        cy.get('.step1 > .fieldset-content > .next-step').click();
        cy.wait(1000);

        cy.get('.loan-amount-wrap-content > .amount-quick-select > .form-content > .input-group > :nth-child(1) > :nth-child(4)').click();
        cy.get('.step2 > .fieldset-content > .next-step').click();

        cy.get('label.next > .form-button').click();
        cy.wait(1000);

        cy.get('#annual_income').type('65000');
        cy.get('[value="Bi-Weekly"]').click();
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click();

        cy.get('[data-value="$20,000 - $29,999"] > .form-button').click();
        cy.wait(1500);
        cy.get('#home_address').type('1st Good st');
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .d-flex > .form-content > .input-group > :nth-child(2) > .form-button').click();
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click();
        cy.wait(1500);
        cy.get('#apt-suite').type('12');
        cy.get('#city').type('Brooklyn');
        cy.get('#state').select('NY');
        cy.get('#zip_code').type('23234');
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click();
        cy.wait(1000);

        cy.get('#email').type('igor@aol.com', {force: true});
        cy.get('#phone_number').type('7436502222');
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click();
        cy.wait(1000);

        cy.get('[data-value="Good (660-719)"]').click();
        cy.wait(1000);
        cy.get('#education').select('Other');
        cy.get('#employment').select('Employed full time');
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click();
        cy.wait(1000);

        cy.get('#date_of_birth').type('12121990');
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click();
        cy.wait(1000);

        cy.get('.show-additional-reviews').click();
        cy.get('.hidden-review-content').should('be.visible');
        cy.get('.step4 > .fieldset-content > .next-step').click();
        cy.wait(6000);

        cy.get('#ssn').type('123456789');
        cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(21000);

        cy.get('.mt-2 > .pt-3 > .container').should('be.visible')
    });

    it('Try SwiftFN/sf', () => {
        cy.visit('https://polymorphic:polymorphic2021@swiftlendingusa.polymorphic-sandbox.com/sf');

        cy.get('input[value="40000"]').click();
        cy.get('.step1 > .fieldset-content > .next-step').click();
        cy.wait(2000);

        cy.get('input[value="Debt Consolidation"]').click();
        cy.wait(2000);

        cy.get('input[value="I owe LESS THAN $20,000"]').click({force: true});
        cy.wait(1500);
        cy.get('.step3 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[value="Yes, I am"]').click({force: true});
        cy.wait(1500);
        cy.get('[style="display: block; opacity: 1;"] > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="annual_income"]').type('65000');
        cy.get('input[value="Bi-Weekly"]').click();
        cy.get('.step4 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('12121990');
        cy.get('.step5 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('7436502222');
        cy.get('input[name="home_address"]').type('1st Good st');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('#state').select('NY');
        cy.get('input[name="zip_code"]').type('23234');
        cy.get('.step6 > .fieldset-content > .next-step').click({force: true});
        cy.wait(2000);

        cy.get('a.show-additional-reviews').click()
        cy.get('div[class="review-content"]').should('be.visible');
        cy.get('.step7 > .fieldset-content > .next-step').click();
        cy.wait(6000);

        cy.get('#ssn').type('123456789');
        cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(21000);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });
})
