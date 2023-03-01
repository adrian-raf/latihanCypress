describe('My Test Suite', () => {
  // Direct access
  it.skip('Fixtures Demo Test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    // cy.get("input[name='username']").type('Admin');
    // cy.get("input[name='password']").type('admin123');
    // cy.get("button[type='submit']").click();

    // when in Dasboard
    // cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should(
    //     'have.text',
    //     'Dashboard'
    //   );

    cy.fixture('orangehrm').then((data) => {
      cy.get("input[name='username']").type(data.username);
      cy.get("input[name='password']").type(data.password);
      cy.get("button[type='submit']").click();
      cy.get(
        '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'
      ).should('have.text', data.expected);
    });
  });

  // Access through Hook - for multiple it blocks
  let userdata;
  before(() => {
    cy.fixture('orangehrm').then((data) => {
      userdata = data;
    });
  });

  it.only('Fixtures Demo Test 2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com');

    cy.get("input[name='username']").type(userdata.username);
    cy.get("input[name='password']").type(userdata.password);
    cy.get("button[type='submit']").click();
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should(
      'have.text',
      userdata.expected
    );
  });
});
