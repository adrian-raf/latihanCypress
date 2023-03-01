class Login {
  txtUsername = "input[name='username']";
  txtPassword = "input[name='password']";
  btnSubmit = "button[type='submit']";
  lblmsg = '.oxd-topbar-header-breadcrumb > .oxd-text';

  setUsername(username) {
    cy.get(this.txtUsername).type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }

  verifyLogin() {
    cy.get(this.lblmsg).should('have.text', 'Dashboard');
  }
}

export default Login;
