describe('Make an Appointment', () => {
    it('should make an appointment successfully', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.contains('Make Appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('#txt_visit_date').click();
        cy.get('.datepicker-days').contains('30').click();
        cy.get('#txt_comment').type('CURA Healthcare Service');
        cy.get('#btn-book-appointment').click();
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
        cy.get('#hospital_readmission').should('have.text', 'Yes');
        cy.get('#program').should('have.text', 'Medicaid');
        cy.get('#visit_date').should('have.text', '30/04/2024');
        cy.get('#comment').should('have.text', 'CURA Healthcare Service');
    });
});