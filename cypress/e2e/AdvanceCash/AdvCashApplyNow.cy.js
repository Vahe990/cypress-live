Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });

describe('Advance.Cash Full Application Test', () => {
  it('Should complete the entire application process', () => {
  
    cy.visit('https://polymorphic:polymorphic@advance-cash.polymorphic-sandbox.com');
    
    //  Fill the first page form
    cy.get('input[name="first_name"]').type('Vah');
    cy.get('input[name="last_name"]').type('Simon');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="birth_date"]').type('03-14-1989');
    cy.get('select[name="state"]').select('Alabama');
    cy.get('input#check_privacy').click();
    cy.get('button').contains('Apply Now').click();
    cy.wait(3000)
    
    cy.url().should('include', '/apply-today');

    //  Fill the second page form
    cy.get('input[name="ssn"]').type('123456789');
    cy.get('input[name="address"]').type('59 Wywie St');
    cy.get('#valid_driver_license').type('G1767880');
    cy.get('#state_issued').select('DE');
    cy.get('input[name="city"]').type('Tytycie');
    cy.get('input[name="zip"]').type('12349');
    cy.get('input[name="home_phone"]').type('2727860655');

    cy.get('input[name="aba_number"]').type('123456789');
    cy.get('input[name="bank_name"]').type('NormBank');
    cy.get('input[name="account_number"]').type('1234567890');
    cy.get('select[name="account_type"]')
      .select('SavingsAccount')
      .invoke('val')
      .then((value) => {
        cy.log('Selected Value:', value);
      });

    cy.get('select[name="year_with_this_account"]:visible')
      .select('5')
      .should('have.value', '5');
    cy.get('select[name="months_with_this_account"]').select('9');

    cy.get('input[name="monthly_income"]').type('6666');
    cy.get('select[name="source"]').select('Social Security');
    cy.get('select[name="payroll_type"]').select('Cash');
    cy.get('select[name="pay_frequency_type"]').select('Monthly');

    cy.get('input[name="monthly_pay_day_type_0"]').first().check();
    cy.get('select[name="pay_day_frequency_day"]:visible')
      .select('12')
      .should('have.value', '12');

    cy.get('input#check_privacy').click();
    cy.get('input[name="receive_notification"]').click();
    cy.get('input#check_condition').click();

    cy.get('button').contains('Apply').click();
    cy.wait(4000);

    cy.get('h2').should('be.visible')
  });
});
