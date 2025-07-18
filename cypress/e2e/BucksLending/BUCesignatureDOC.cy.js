describe('Tests for Bucks Lending Esignature DOC', () => {
    beforeEach(() => {
        cy.viewport(1450,1024);
    });

    it('Esignature Document', () => {
        cy.visit('https://www.buckslending.com/esignature/document?token');
        cy.wait(5000);

        
    });

});
  