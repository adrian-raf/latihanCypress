/// <reference types= "Cypress" />

import 'cypress-iframe';

describe('Handling frames', () => {
  it('Approach 1', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');
    const iframe = cy
      .get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);

    iframe.clear().type("Welcome, Adrian'{ctrl+a}");
    cy.get("button[aria-label='Bold']").click();
  });

  it('Approach 2 - by using custom command', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.getIframe('#mce_0_ifr').clear().type("Welcome, Adrian'{ctrl+a}");

    cy.get("button[aria-label='Bold']").click();
  });

  it.only('Approach 3 - using iframe plugin ', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    cy.frameLoaded('#mce_0_ifr'); //Load the frame

    cy.iframe('#mce_0_ifr').clear().type("Welcome, Adrian'{ctrl+a}");

    cy.get("button[aria-label='Bold']").click();
  });
});
