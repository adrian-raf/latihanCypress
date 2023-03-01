/**
 * To turn off all uncaught exception handling
 * Harus pake yg dibawah ini
 */

cy.on('uncaught:exception', (err, runnable) => {
  expect(err.message).to.include('is not undefined');
  done();
  return false;
});

describe('My Test Suite', () => {
  it('Data driven Test', () => {
    cy.fixture('orangehrm2').then((data) => {
      cy.visit('https://opensource-demo.orangehrmlive.com');

      data.forEach((userdata) => {
        cy.get("input[name='username']").type(userdata.username);
        cy.get("input[name='password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        // Validation
        if (userdata.username === 'Admin' && userdata.password === 'admin123') {
          cy.get(
            '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'
          ).should('have.text', userdata.expected); //Dashboard validation
          cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); //logout
          cy.get(':nth-child(4)> .oxd-userdropdown-link').click(); //logout
        } else {
          cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should(
            'have.text',
            userdata.expected
          );
        }
      });
    });
  });
});
