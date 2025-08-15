describe('Content Tests for Bucks Lending', () => {
    beforeEach(() => {
        cy.viewport(1450,1024);
        cy.visit('https://www.buckslending.com/');
    });
  
    it('Installment Loan page and return to Home', () => {

      cy.get('a.nav-link[href="/installment-loans"]').first().click();
      cy.url().should('include', '/installment-loans');
  
      cy.get('div.text-button.text-secondary').contains('Overview').click();
      cy.get('div[class="body2 text-secondary mt-16"]').should('be.visible');

      cy.get('div.text-button.text-secondary').contains('Requirements to Apply').click();
      cy.get('div[class="col-12 col-lg-6 row-gap-12 flex-column"]').should('be.visible');

      cy.get('div.text-button.text-secondary').contains('How Does The Process Work?').click();
      cy.get('div[class="container"]').should('be.visible');
      cy.get('a.orange-button[href="/apply-now"]')
        .should('be.visible');

      cy.get('a.nav-link[href="/"]').first().click();
      cy.wait(3000)
    });
  
    it('FAQs page and return to Home', () => {

      cy.get('a.nav-link[href="/faqs"]').first().click();
      cy.url().should('include', '/faqs');
  
      cy.get('a.link-light.text-underline[href="/contact-us"]').click();
      cy.get('div[class="form-block flex-columns-between gap-20"]').should('be.visible');
      cy.go('back');

      cy.get('a.link-light.text-underline[href="/rates"]').click();
      cy.get('table[class="table mb-5 mt-5"]').should('be.visible');
      cy.go('back');
      cy.get('a.orange-button[href="/apply-now"]')
        .should('be.visible');
  
      cy.get('a.nav-link[href="/"]').first().click();
      cy.wait(3000)
    });
  
    it('Rates page and return to Home', () => {

      cy.get('a.nav-link[href="/rates"]').first().click();
      cy.url().should('include', '/rates');
  
      cy.get('div.text-button.text-secondary').contains('Loan amount').click();
      cy.get('div[class="body2 text-secondary mt-16 mb-5"]').contains('The minimum initial amount is $300.00').should('be.visible');

      cy.get('div.text-button.text-secondary').contains('Cost of Your Loan').click();
      cy.get('div[class="body2 text-secondary mt-16 mb-5"]').contains('The total payments due, including principal, interest, and any fees').should('be.visible');

      cy.get('div.text-button.text-secondary').contains('Payment Schedules').click();
      cy.get('div[class="body2 text-secondary mt-16 mb-5"]').contains('Your full payment schedule will be included in your loan agreement').should('be.visible');

      cy.get('div.text-button.text-secondary').contains('Funding Timeframes').click();
      cy.get('div[class="body2 text-secondary mt-16 mb-5"]').contains('Once we receive your application, a customer service representative').should('be.visible');

      cy.get('div.text-button.text-secondary').contains('Late / NSF Fees').click();
      cy.get('div[class="body2 text-secondary mt-16"]').contains('Bucks Lending reserves the right to assess an NSF fee of up to $15').should('be.visible');

      cy.get('a.orange-button[href="/apply-now"]')
        .should('be.visible');
    
      cy.get('a.nav-link[href="/"]').first().click();
      cy.wait(3000)
    });
  
    it('Contact Us page and return to Home', () => {
      cy.get('a.nav-link[href="/contact-us"]').first().click();
      cy.url().should('include', '/contact-us');
  
      cy.get('a.nav-link[href="/"]').first().click().wait(2000);
    });

    it('Terms of Use, Privacy Policy, and Website Accessibility Policy pages', () => {

      cy.get('a.caption1[href="/terms-of-use"]').invoke('removeAttr', 'target').click();
      cy.wait(2000);
      cy.url().should('equal', 'https://www.buckslending.com/terms-of-use');

      cy.get('a.caption1[href="/privacy-policy"]').invoke('removeAttr', 'target').click();
      cy.wait(2000);
      cy.url().should('equal', 'https://www.buckslending.com/privacy-policy');

  
      cy.get('a.caption1[href="/website-accessibility-policy"]').invoke('removeAttr', 'target').click();
      cy.wait(2000);
      cy.url().should('equal', 'https://www.buckslending.com/website-accessibility-policy');

  
      cy.get('a.nav-link[href="/"]').first().click();
      cy.wait(3000)
    });
  });
  