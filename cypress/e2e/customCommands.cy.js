describe('Custom Commands', () => {
  it('Handling Links', () => {
    cy.visit('https://demo.nopcommerce.com/');

    // Direct without using custom command
    // cy.get(
    //   "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
    // ).click(); //get Apple macbook pro 13-inch label
    // cy.get("div[class='product-name'] h1").should(
    //   'have.text',
    //   'Apple MacBook Pro 13-inch'
    // );

    // With using custom command
    cy.clickLink('Apple MacBook Pro 13-inch');
    cy.get("div[class='product-name'] h1").should(
      'have.text',
      'Apple MacBook Pro 13-inch'
    );
  });

  it('Overwriting existing command', () => {
    cy.visit('https://demo.nopcommerce.com/');
    // ignore case sensitive of the label
    cy.clickLink('APPLE MACBOOK PRO 13-INCH');
    cy.get("div[class='product-name'] h1").should(
      'have.text',
      'Apple MacBook Pro 13-inch'
    );
  });

  it.only('Login Command', () => {
    cy.visit('https://demo.nopcommerce.com/');

    // Login
    cy.clickLink('Log in'); //custom command
    cy.loginApp('test@gmail.com', 'test123'); //custom command
    cy.get('.ico-account').should('have.text', 'My account');
    // Search
  });
});
