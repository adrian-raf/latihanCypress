/// <reference types= "Cypress" />
describe('Handle Dropdowns', () => {
  it.skip('Dropdown with select', () => {
    cy.visit('https://www.zoho.com/commerce/free-demo.html');
    cy.get('select#zcf_address_country')
      .select('Italy')
      .should('have.value', 'Italy');
  });

  //   Bootstrap dropdown without having selected tag
  it.skip('Dropdown with select', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    cy.get('#select2-billing_country-container').click(); //dropdown element
    cy.get('.select2-search__field').type('Italy{enter}'); //input element

    cy.get('#select2-billing_country-container').should('have.text', 'Italy');

    /**
     * Untuk dropdown yg normal (yg memiliki selected tag) dapat menggunakan have.value,
     * tetapi dalam kasus ini karena dropdown nya tidak memiliki selected tag, maka menggunakan
     * have.text
     */
  });

  // Dropdown static
  it.skip('Auto suggest dropdown', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').type('Jakarta');
    cy.get('.suggestion-title').contains('Jakarta MRT').click();
  });

  // Dropdown dynamic
  it('Dynamic dropdown', () => {
    cy.visit('https://www.google.com/');

    cy.get("input[name='q']").type('cypress automation');

    cy.wait(3000);

    cy.get('div.wM6W7d>span').should('have.length', 11);

    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
      if ($el.text() == 'cypress automation tool') {
        cy.wrap($el).click();
      }
    });

    cy.get("input[name='q']").should('have.value', 'cypress automation tool');
  });
});
