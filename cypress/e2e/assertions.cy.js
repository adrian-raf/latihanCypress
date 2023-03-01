// IMPLICIT AASERTIONS or Built in Assecrtions
// Should and And Keywords

describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // cy.url().should("include", "orangehrmlive.com");
    // cy.url().should(
    //   "eq",
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.url().should("contain", "orangehrm");

    // Dengan menerapkan multiple assertions should
    // cy.url()
    //   .should("include", "orangehrmlive.com")
    //   .should(
    //     "eq",
    //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    //   )
    //   .should("contain", "orangehrm");

    // Dengan menerapkan multiple assertions and
    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrm")
      .and("not.contain", "bluehrm");

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");
  });

  /**
   * EXPLICIT ASSERTIONS
   * Expect - BDD
   * Assert - TDD
   */
  it("Excplicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("[name='username']").type("Admin");
    cy.get("[name='password']").type("admin123");
    cy.get("button[type='submit']").click(); //tag and attribute

    let expName = "SUHAS Ga(12"; //our expected

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text(); //actual expected

      //  BDD Style
      expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName);

      //   TDD Style
      // assert.equal(actName, expName);
      // assert.notEqual(actName, expName);
    });
  });
});
