import 'cypress-iframe';
require('@4tw/cypress-drag-drop');

describe('Mouse Operation', () => {
  it('Mouse Hover', () => {
    cy.visit('https://demo.opencart.com/');
    cy.get(
      'body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)'
    ).should('not.be.visible');
    cy.get("[id='narbar-menu']>ul>li:nth-child(1)")
      .trigger('mouseover')
      .click();
    cy.get("ul[class='list-unstyled']>li:nth-child(1)").should('be.visible');
  });

  it('Right Click', () => {
    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    // Approach 1
    // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
    // cy.get('.context-menu-icon-copy').should('be.visible');

    // Approach 2
    cy.get('.context-menu-one.btn.btn-neutral').rightclick();
    cy.get('.context-menu-icon-delete').should('be.visible');
  });

  it('Double Click', () => {
    cy.visit(
      'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3'
    );
    cy.frameLoaded('#iframeResult'); // load the frame first

    // Approach 1
    cy.iframe('#iframeResult')
      .find("button[ondblclick='myFunction()']")
      .trigger('dblclick');
    cy.iframe('#iframeResult')
      .find('#field2')
      .should('have.value', 'Hello World!');

    // Approach 2
    cy.iframe('#iframeResult')
      .find("button[ondblclick='myFunction()']")
      .dblclick();

    cy.iframe('#iframeResult')
      .find('#field2')
      .should('have.value', 'Hello World!');
  });

  it('Drag and Drop using plugin', () => {
    cy.visit(
      'http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html'
    );
    cy.get('#box6').should('be.visible');
    cy.get('#box106').should('be.visible');

    cy.wait(2000);
    cy.get('#box6').drag('#box106', { force: true });
    // ketika element visibility: hidden maka dapat di force: true
  });

  it.only('Scrolling Page', () => {
    cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');
    cy.get(
      ':nth-child(1) > tbody > :nth-child(87) > :nth-child(1) > img'
    ).scrollIntoView({ duration: 3000 }); //get Indonesia flag
    // didalam scroll kita dapat menambahkan parameter didalam curly bracket
    // dengan nama  duration. Untuk melihat kecepatan ketika scroll dalam millisecond
    cy.get(
      ':nth-child(1) > tbody > :nth-child(87) > :nth-child(1) > img'
    ).should('be.visible');

    cy.get(
      ':nth-child(1) > tbody > :nth-child(8) > :nth-child(1)'
    ).scrollIntoView({ duration: 3000 }); // get Argentina Flag
    cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1)').should(
      'be.visible'
    );
  });
});
