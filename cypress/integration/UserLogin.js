/// <reference types="cypress" />
describe("Login a user", () => {
  it("using UI", () => {
    cy.visit("/login");
    cy.location("pathname").should("equal", "/login");

    // enter valid username and password
    cy.get("[name=username]").type(Cypress.env("username"));
    cy.get("[name=password]").type(Cypress.env("password"));
    cy.contains("button", "Login").click();

    // confirm we have logged in successfully
    cy.location("pathname").should("equal", "/profile");
    cy.contains("User")
      .should("be.visible")
      .then(() => {
        /* global window */
        const userString = window.localStorage.getItem("user");

        expect(userString).to.be.a("string");
        const user = JSON.parse(userString);

        expect(user).to.be.an("object");
        expect(user).to.have.keys(["msg", "token", "user"]);

        expect(user["user"]).to.have.keys([
          "userid",
          "username",
          "registered",
          "password",
          "last_login",
        ]);

        expect(user.token).to.be.a("string");
      });

    // now we can log out
    cy.contains("a", "LogOut").click();
    cy.location("pathname").should("equal", "/login");
  });

  // Check we get 401 - unauthorised without token
  it("fails to access protected resource", () => {
    cy.request({
      url: `${Cypress.env("APIUrl")}/main`,
      failOnStatusCode: false,
    })
      .its("status")
      .should("equal", 401);
  });

  it("Does not log in with invalid password", () => {
    cy.visit("/login");
    cy.location("pathname").should("equal", "/login");

    // enter valid username and password
    cy.get("[name=username]").type("username");
    cy.get("[name=password]").type("wrong-password");
    cy.contains("button", "Login").click();

    // still on /login page plus an error is displayed
    cy.location("pathname").should("equal", "/login");
    cy.contains(".alert-danger", "Username or password is incorrect").should(
      "be.visible"
    );
  });
});