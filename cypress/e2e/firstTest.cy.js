describe('My First Test', function () {
  beforeEach(function () {
    // runs once before all tests in the block
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });
  it('test pertama nich', () => {
    cy.title().should('eq', 'OrangeHRM');
    cy.get('.orangehrm-login-branding > img').should('be.visible'); // class tag is optional
  });

  // it("test login", () => {
  //   cy.get("[name='username']").type("Admin"); // attribute tag ([]) is optional
  //   cy.get("[name='username']").should("have.value", "Admin");
  //   cy.get("[name='password']").type("admin123");
  //   cy.get("[name='password']").should("have.value", "admin123");
  //   cy.get(".oxd-button").click();
  // });

  it('test login with wrong value', () => {
    cy.get("[name='username']").type('adam');
    cy.get("[name='password']").type('admin');
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content > .oxd-text')
      .contains('Invalid credentials')
      .should('be.visible');
  });
});
