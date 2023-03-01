/// <reference types= "Cypress" /> // AGAR AUTOMATED SUGGESTION CYPRESS TAMPIL

describe("Check UI Elements", () => {
  // it("Checking Radio Buttons", () => {
  //   cy.visit("https://itera-qa.azurewebsites.net/home/automation");

  //   // Visibility of Radio Button
  //   cy.get("input#male").should("be.visible");
  //   cy.get("input#female").should("be.visible");
  //   cy.get("input#other").should("be.visible");

  //   // Selecting Radio Button

  //   // Select male button
  //   cy.get("input#male").check().should("be.checked");
  //   cy.get("input#female").should("not.be.checked");
  //   cy.get("input#other").should("not.be.checked");

  //   // Select female button
  //   cy.get("input#female").check().should("be.checked");
  //   cy.get("input#male").should("not.be.checked");
  //   cy.get("input#other").should("not.be.checked");
  // });

  it("Checking Check Box ", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    // // Visibility of the element
    // cy.get("input#monday").should("be.visible");

    // // Selecting single check box - monday
    // cy.get("input#monday").check().should("be.checked");

    // // Unselecting checkbox
    // cy.get("input#monday").uncheck().should("not.be.checked");

    // // Selecting all check box
    // cy.get("input.form-check-input[type='checkbox']")
    //   .check()
    //   .should("be.checked");

    // // Unselecting all check box
    // cy.get("input.form-check-input[type='checkbox']")
    //   .uncheck()
    //   .should("not.be.checked");

    // Select first and last checkbox
    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should("be.checked");
  });
});
