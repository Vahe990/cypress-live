Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });

describe('SDS-LendWyse Automation', () => {
    beforeEach(() => {
        cy.viewport(390,844);
    });

    it('Try Lendwyse', () => {
        cy.visit('https://polymorphic:polymorphic2021@trylendwyse.polymorphic-sandbox.com/');
        
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
        
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
        
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lendwyse', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse.polymorphic-sandbox.com/');

        cy.get('.mb-0 > .btn > .btn-inner--text').first().click();
        cy.wait(3000);

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
        // cy.wait(8000);

        // cy.get('#ssn').type('123456789');
        // cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(24500);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });

    it('Lendwyse 2', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse2.polymorphic-sandbox.com/');
        
        cy.get('input[name="pin"]').type('4245581481');
        cy.get('button#get_code_info').click({force: true})
        cy.wait(3000);
        
        cy.get('input[name="email"]').first().type('igor@aol.com', {force: true});
        cy.get('input[name="phone_number"]').first().type('4123269028', {force: true});
        cy.get('input[name="annual_income"]').first().type('55234', {force: true});
                
        cy.get('button#submit').first().click({force: true});
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lendwyse Apply-PPC', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse.polymorphic-sandbox.com/apply-ppc');
        
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
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
        // cy.wait(8000);

        // cy.get('#ssn').type('123456789');
        // cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(24500);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });

    it('Lendwyse Apply-FB', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse.polymorphic-sandbox.com/apply-fb');
        
        cy.get('.custom-select').select("17500", { force: true });
        cy.wait(3000);
        
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
        // cy.wait(8000);

        // cy.get('#ssn').type('123456789');
        // cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(24500);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });

    it('Lendwyse Apply-SIMPLE', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse.polymorphic-sandbox.com/apply-simple');
        
        cy.get('.amount-field > .col-12 > .custom-select').select("17500", { force: true });
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get(':nth-child(6) > .col-12 > .form-control').type('12121999');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get(':nth-child(9) > .col-12 > .form-control').type('12st Good Morning');
        cy.get(':nth-child(10) > .col-12 > .form-control').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');   
        cy.get(':nth-child(12) > .col-12 > .form-control').type('34345')
        
        cy.get('button#submit').click();
        cy.wait(5000);
    
        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds.polymorphic-sandbox.com/');
        
        cy.get('select[aria-label="Total Debt"]').select("17500", { force: true });
        cy.wait(3000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="annual_income"]').type('55234');

        cy.get('input[name="notification_checkbox"]').click();
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS2', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds2.polymorphic-sandbox.com/');

        cy.get('input[name="pin"]').type('4245581481');
        cy.get('button#get_code_info').click({force: true})
        cy.wait(3000);
        
        cy.get('input[name="email"]').first().type('igor@aol.com', {force: true});
        cy.get('input[name="phone_number"]').first().type('4123269028', {force: true});
        cy.get('input[name="annual_income"]').first().type('55234', {force: true});
                
        cy.get('button#submit').first().click({force: true});
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS source=SDS_PPC', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds.polymorphic-sandbox.com/?source=SDS_PPC');
        
        cy.get('select[aria-label="Total Debt"]').select("17500", { force: true });
        cy.wait(3000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="annual_income"]').type('55234');

        cy.get('input[name="notification_checkbox"]').click();
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS source=SDS_PPC_BRAND', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds.polymorphic-sandbox.com/?source=SDS_PPC_BRAND');
        
        cy.get('select[aria-label="Total Debt"]').select("17500", { force: true });
        cy.wait(3000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="annual_income"]').type('55234');

        cy.get('input[name="notification_checkbox"]').click();
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS source=SDS_BING', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds.polymorphic-sandbox.com/?source=SDS_BING');
        
        cy.get('select[aria-label="Total Debt"]').select("17500", { force: true });
        cy.wait(3000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="annual_income"]').type('55234');

        cy.get('input[name="notification_checkbox"]').click();
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS source=SDS_BING_BRAND', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds.polymorphic-sandbox.com/?source=SDS_BING_BRAND');
        
        cy.get('select[aria-label="Total Debt"]').select("17500", { force: true });
        cy.wait(3000);

        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="annual_income"]').type('55234');

        cy.get('input[name="notification_checkbox"]').click();
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS2 source=SDS_PPC', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds2.polymorphic-sandbox.com/?source=SDS_PPC');

        cy.get('input[name="pin"]').type('4245581481');
        cy.get('button#get_code_info').click({force: true})
        cy.wait(3000);
        
        cy.get('input[name="email"]').first().type('igor@aol.com', {force: true});
        cy.get('input[name="phone_number"]').first().type('4123269028', {force: true});
        cy.get('input[name="annual_income"]').first().type('55234', {force: true});
                
        cy.get('button#submit').first().click({force: true});
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS2 source=SDS_MAILER_WEB', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds2.polymorphic-sandbox.com/?source=SDS_MAILER_WEB');

        cy.get('input[name="pin"]').type('4245581481');
        cy.get('button#get_code_info').click({force: true})
        cy.wait(3000);
        
        cy.get('input[name="email"]').first().type('igor@aol.com', {force: true});
        cy.get('input[name="phone_number"]').first().type('4123269028', {force: true});
        cy.get('input[name="annual_income"]').first().type('55234', {force: true});
                
        cy.get('button#submit').first().click({force: true});
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('SDS2 source=SDS_MAILER_WEB_ADS', () => {
        cy.visit('https://polymorphic:polymorphic2021@sds2.polymorphic-sandbox.com/?source=SDS_MAILER_WEB_ADS');
        
        cy.get('input[name="first_name"]').first().type('Daniel');
        cy.get('input[name="last_name"]').first().type('Drozdov');
        cy.get('input[name="email"]').first().type('igor@aol.com');
        cy.get('input[name="phone_number"]').first().type('4123269028');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('button#submit').first().click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lwoffer source=LW_WEB_E', () => {
        cy.visit('https://polymorphic:polymorphic2021@lwoffer.polymorphic-sandbox.com/?source=LW_WEB_E');

        cy.get('input[name="first_name"]').first().type('Daniel');
        cy.get('input[name="last_name"]').first().type('Drozdov');
        cy.get('input[name="email"]').first().type('igor@aol.com');
        cy.get('input[name="phone_number"]').first().type('4123269028');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('button#submit').first().click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lwoffer source=LW_EMAIL_WEB', () => {
        cy.visit('https://polymorphic:polymorphic2021@lwoffer.polymorphic-sandbox.com/?source=LW_EMAIL_WEB');

        cy.get('input[name="first_name"]').first().type('Daniel');
        cy.get('input[name="last_name"]').first().type('Drozdov');
        cy.get('input[name="email"]').first().type('igor@aol.com');
        cy.get('input[name="phone_number"]').first().type('4123269028');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('button#submit').first().click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lwoffer source=LW_WEB_EMAIL', () => {
        cy.visit('https://polymorphic:polymorphic2021@lwoffer.polymorphic-sandbox.com/?source=LW_WEB_EMAIL');

        cy.get('input[name="first_name"]').first().type('Daniel');
        cy.get('input[name="last_name"]').first().type('Drozdov');
        cy.get('input[name="email"]').first().type('igor@aol.com');
        cy.get('input[name="phone_number"]').first().type('4123269028');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('button#submit').first().click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lendwyse 2 source=LW_WEB_E', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse2.polymorphic-sandbox.com/?source=LW_WEB_E');

        cy.get('input[name="first_name"]').first().type('Daniel');
        cy.get('input[name="last_name"]').first().type('Drozdov');
        cy.get('input[name="email"]').first().type('igor@aol.com');
        cy.get('input[name="phone_number"]').first().type('4123269028');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('button#submit').first().click();
        cy.wait(5000);
        
        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lendwyse 2 source=LW_EMAIL_WEB', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse2.polymorphic-sandbox.com/?source=LW_EMAIL_WEB');

        cy.get('input[name="first_name"]').first().type('Daniel');
        cy.get('input[name="last_name"]').first().type('Drozdov');
        cy.get('input[name="email"]').first().type('igor@aol.com');
        cy.get('input[name="phone_number"]').first().type('4123269028');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('button#submit').first().click();
        cy.wait(5000);
        
        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lendwyse 2 source=LW_WEB_EMAIL', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse2.polymorphic-sandbox.com/?source=LW_WEB_EMAIL');

        cy.get('input[name="first_name"]').first().type('Daniel');
        cy.get('input[name="last_name"]').first().type('Drozdov');
        cy.get('input[name="email"]').first().type('igor@aol.com');
        cy.get('input[name="phone_number"]').first().type('4123269028');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('button#submit').first().click();
        cy.wait(5000);
        
        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_SC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_SC');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_AW', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_AW');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel', {force: true});
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LI', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LI');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_MDO', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_MDO');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FA', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FA');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LP', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LP');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_CXT', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_CXT');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IDR', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IDR');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_SC_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_SC_L');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_AW_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_AW_L');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LI_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LI_L');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_MDO_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_MDO_L');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FA_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FA_L');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LP_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LP_L');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_CXT_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_CXT_L');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IDR_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IDR_L');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_SC_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_SC_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_AW_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_AW_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LI_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LI_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_MDO_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_MDO_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FA_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FA_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LP_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LP_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_CXT_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_CXT_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IDR_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IDR_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_MDO_SOCIAL_R', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_MDO_SOCIAL_R');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FERWAY_R_E', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FERWAY_R_E');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FERWAY_R_S', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FERWAY_R_S');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IGN_R_E', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IGN_R_E');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IGN_R_S', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IGN_R_S');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IGN_R_SO', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IGN_R_SO');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });


    it('Your Simple Offer source=SDS_EMAIL_CXT_R_S', () => {

        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_CXT_R_S');

        cy.get('select[aria-label="Total Debt"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('select[name="state"]').select('NY');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_SIMPLIFIED', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_SIMPLIFIED');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_BCB_WEB', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_BCB_WEB');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IGN_E', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IGN_E');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_PPC_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_PPC_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_PPC_DC_2', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_PPC_DC_2');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });


    it('Your Simple Offer source=SDS_YSO_FB', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_YSO_FB');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_MDO_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_MDO_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St', {force: true});
        cy.get('input[name="city"]').type('Brooklyn', {force: true});
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_MDO2_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_MDO2_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992', {force: true});
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_AW2_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_AW2_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_AW_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_AW_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel', {force: true});
        cy.get('input[name="last_name"]').type('Drozdov', {force: true});
        cy.get('input[name="date_of_birth"]').type('04/05/1992', {force: true});
        cy.get('input[name="email"]').type('igor@aol.com', {force: true});
        cy.get('input[name="phone_number"]').type('4123269028', {force: true});
        cy.get('input[name="home_address"]').type('2940 W 5th St', {force: true});
        cy.get('input[name="city"]').type('Brooklyn', {force: true});
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_SC_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_SC_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LI_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LI_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FA_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FA_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_LP_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_LP_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FERWAY_R_E_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FERWAY_R_E_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FA_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FA_L');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028', {force: true});
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_FERWAY_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_FERWAY_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer source=SDS_EMAIL_IDS_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/?source=SDS_EMAIL_IDS_DC');

        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Lendwyse INQUIRE-NOW', () => {
        cy.visit('https://polymorphic:polymorphic2021@lendwyse.polymorphic-sandbox.com/inquirenow');
        
        cy.get('.custom-select').first().select("17500");
        cy.wait(3000);
        
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
        // cy.wait(8000);

        // cy.get('#ssn').type('123456789');
        // cy.get('#ssn_fieldset > .fieldset-content > .next-step').click();
        cy.wait(24500);

        cy.get('.mt-2 > .pt-3').should('be.visible')
    });


    it('Swift Lending USA source=LW_WEB_E', () => {
        cy.visit('https://polymorphic:polymorphic2021@swiftlendingusa.polymorphic-sandbox.com/?source=LW_WEB_E');

        cy.get('input[name="first_name"]').first().type('Daniel', { force: true });
        cy.get('input[name="last_name"]').first().type('Drozdov', { force: true });
        cy.get('input[name="email"]').first().type('igor@aol.com', { force: true });
        cy.get('input[name="phone_number"]').first().type('4123269028', { force: true });
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('input[name="notification_checkbox"]').first().click();
        cy.get('button#submit').first().click();
        cy.wait(5000);
        
        cy.get('div[class="row"]').should('be.visible')
    });


    it('Swift Lending USA source=LW_EMAIL_WEB', () => {
        cy.visit('https://polymorphic:polymorphic2021@swiftlendingusa.polymorphic-sandbox.com/?source=LW_EMAIL_WEB');

        cy.get('input[name="first_name"]').first().type('Daniel', { force: true });
        cy.get('input[name="last_name"]').first().type('Drozdov', { force: true });
        cy.get('input[name="email"]').first().type('igor@aol.com', { force: true });
        cy.get('input[name="phone_number"]').first().type('4123269028', { force: true });
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('input[name="notification_checkbox"]').first().click();
        cy.get('button#submit').first().click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Swift Lending USA source=LW_WEB_EMAIL', () => {
        cy.visit('https://polymorphic:polymorphic2021@swiftlendingusa.polymorphic-sandbox.com/?source=LW_WEB_EMAIL');

        cy.get('input[name="first_name"]').first().type('Daniel', { force: true });
        cy.get('input[name="last_name"]').first().type('Drozdov', { force: true });
        cy.get('input[name="email"]').first().type('igor@aol.com', { force: true });
        cy.get('input[name="phone_number"]').first().type('4123269028', { force: true });
        cy.get('select[name="state"]').first().select('NY');
        cy.get('input[name="annual_income"]').first().type('55234');
        cy.get('select[aria-label="Total Debt"]').first().select("17500");

        cy.get('input[name="notification_checkbox"]').first().click();
        cy.get('button#submit').first().click();
        cy.wait(5000);

        cy.get('div[class="row"]').should('be.visible')
    });

    it('Your Simple Offer_DC', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/dc');
    
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);
    
        cy.get('div[class="row"]').should('be.visible')        
    });
    
    it('Your Simple Offer_DC source=SENIOR_POMIDOR', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/dc?source=SENIOR_POMIDOR');
    
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="lead_source"]').should('have.value', 'SENIOR_POMIDOR')
    });
    
    it('Your Simple Offer_DR', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/dr');
    
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').first().type('19285', {force: true});
                
        cy.get('button#submit').click();
        cy.wait(5000);
    
        cy.get('div[class="row"]').should('be.visible')        
    });
    
    
    it('Your Simple Offer_DR source=SENIOR_POMIDOR', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/dr?source=SENIOR_POMIDOR');
    
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="lead_source"]').should('have.value', 'SENIOR_POMIDOR')
    });
    
    it('Your Simple Offer_L', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/l');
    
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="first_name"]').type('Daniel');
        cy.get('input[name="last_name"]').type('Drozdov');
        cy.get('input[name="date_of_birth"]').type('04/05/1992');
        cy.get('input[name="email"]').type('igor@aol.com');
        cy.get('input[name="phone_number"]').type('4123269028');
        cy.get('input[name="home_address"]').type('2940 W 5th St');
        cy.get('input[name="city"]').type('Brooklyn');
        cy.get('select[name="state"]').select('NY');
        cy.get('input[name="zip_code"]').type('19285');
                
        cy.get('button#submit').click();
        cy.wait(5000);
    
        cy.get('div[class="row"]').should('be.visible')        
    });
    
    
    it('Your Simple Offer_L source=SENIOR_POMIDOR', () => {
        cy.visit('https://polymorphic:polymorphic2021@yoursimpleoffer.polymorphic-sandbox.com/l?source=SENIOR_POMIDOR');
    
        cy.get('select[name="debt_amount"]').select('17500');
        cy.wait(3000);
        
        cy.get('input[name="lead_source"]').should('have.value', 'SENIOR_POMIDOR')
    });    
});
