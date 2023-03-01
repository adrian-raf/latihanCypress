describe('My suite', () => {
  it('Navigation Test', () => {
    cy.visit('https://demo.opencart.com/');
    cy.title().should('eq', 'Your Store'); //Homepage

    cy.get('li:nth-child(7) a:nth-child(1)').click();
    cy.get("div[id='content'] h2")
      .should('be.visible')
      .and('have.text', 'Cameras'); //Cameras page

    cy.go('back'); //back to homepage

    cy.go('forward'); //forward to cameras page again
    cy.get("div[id='content'] h2")
      .should('be.visible')
      .and('have.text', 'Cameras');

    cy.go(-1); //home page

    cy.go(1); // cameras page

    cy.reload(); //for manual reload
  });
});
