describe('Appointment History', () => {
    it('should show no appointment history', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.contains('Make Appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('.fa-bars').click();
        cy.get('#sidebar-wrapper').should('have.class', 'active');
        cy.contains('History').click();
        cy.contains('No appointment').should('be.visible');
    });
});
