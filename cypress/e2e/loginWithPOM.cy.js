// PAGE OBJECT MODEL PATTERN

import Login from '../LoginPages/loginPage2';

describe('Page Object Model', () => {
  // General Approach
  it('Login Test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get("input[name='username']").type('Admin');
    cy.get("input[name='password']").type('admin123');
    cy.get("button[type='submit']").click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
      'have.text',
      'Dashboard'
    );
  });

  // Using POM (Page Object Model) import class Login from ../PageObject/loginPage.js
  it('POM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    const ln = new Login(); //ln is representing object reference variable, ln will call method from Login class
    ln.setUsername('Admin');
    ln.setPassword('admin123');
    ln.clickSubmit();
    ln.verifyLogin();
  });

  // Using POM with fixture
  it.only('POM with fixture', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.fixture('orangehrm').then((data) => {
      const ln = new Login();
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin();
    });
  });
});
