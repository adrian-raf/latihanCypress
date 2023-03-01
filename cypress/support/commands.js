// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types= "Cypress" /> // AGAR AUTOMATED SUGGESTION CYPRESS TAMPIL
// JIKA DILETAKKAN PADA FILE COMMANDS.JS MAKA AKAN MEREFERENCE KE SEMUA FILE
Cypress.Commands.add('getIframe', (iframe) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
});

// Custom command for clicking on link using label
Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click();
});

// IT NOT SUPPORT LONGER IN CYPRESS 12.V
// Overwrite contains() to make ignore caseSensitive

// Cypress.Commands.overwrite(
//   'contains',
//   (originalFn, subject, filter, text, options = {}) => {
//     // determine if a filter argument was passed
//     if (typeof text === 'object') {
//       options = text;
//       text = filter;
//       filter = undefined;
//     }

//     options.matchCase = false;
//     return originalFn(subject, filter, text, options);
//   }
// );

// Custom command for login
Cypress.Commands.add('loginApp', (email, password) => {
  cy.get("input[name='Email']").type(email);
  cy.get("input[name='Password']").type(password);
  cy.get("button[class='button-1 login-button']").click();
});
