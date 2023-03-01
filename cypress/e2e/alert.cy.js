/// <reference types= "Cypress" />

describe('Alerts', () => {
  // 1) Javascript Alert: It will have some text and an 'OK' button
  it('Js alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsAlert()']").click();
    // to trigger method event, use cy.on()
    cy.on('window:alert', (isi) => {
      expect(isi).to.contains('I am a JS Alert');
    });
    // alert window automatically closed by cypress
    cy.get('p#result').should('have.text', 'You successfully clicked an alert');
  });

  // 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
  it('Js confirm alert - OK Button', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsConfirm()']").click();
    // Cypress automatically will close alert window by using Ok button -- Default behaviour
    cy.on('window:confirm', (isi) => {
      expect(isi).to.contains('I am a JS Confirm');
    });

    cy.get('p#result').should('have.text', 'You clicked: Ok');
  });

  it('Js confirm alert - Cancel Button', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm', () => false); // Cypress closes alert window using cancel button

    cy.get('p#result').should('have.text', 'You clicked: Cancel');
  });
  // 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'
  it(' Js Prompt alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('welcome');
    }); //this event should be triggered before opening the alert window

    cy.get("button[onclick='jsPrompt()']").click();

    // cypress will automatically close prompted alert - it will use OK button by default

    cy.get('p#result').should('have.text', 'You entered: welcome');

    // cy.on('window:prompt', () => false); // Cypress closes alert window using cancel button
    //  cy.window().then((win) => {
    //     cy.stub(win, 'prompt').callsFake(() => null);
    // });

    // cy.get('p#result').should('have.text', 'You entered: null');
  });
  // 4) Authenticated Alert
  it.only('Authenticated alert', () => {
    // Approach 1
    // cy.visit('https://the-internet.herokuapp.com/basic_auth', {
    //   auth: { username: 'admin', password: 'admin' },
    // });
    // cy.get("div[class='example'] p").should(
    //   'have.contain',
    //   'Congratulations'
    // );

    // Approach 2
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations');
  });
});
