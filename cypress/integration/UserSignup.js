/// <reference types="cypress" />
describe("Register a user", () => {
  it("using UI", () => {
    cy.visit("/register");
    cy.location("pathname").should("equal", "/register");

    // enter invalid password
    cy.get("[name=username]").type("username");
    cy.get("[name=password]").type("a");
    cy.contains("button", "Sign Up").click();

    // still on /register page plus an error is displayed
    cy.location("pathname").should("equal", "/register");
    cy.contains(".alert-danger", "The password must be").should("be.visible");
    
    cy.get("[name=username]").clear();
    cy.get("[name=password]").clear();

    // enter invalid username
    cy.get("[name=username]").type("a");
    cy.get("[name=password]").type("123456");
    cy.contains("button", "Sign Up").click();

    // still on /register page plus an error is displayed
    cy.location("pathname").should("equal", "/register");
    cy.contains(".alert-danger", "The username must be").should("be.visible");

    cy.get("[name=username]").clear();
    cy.get("[name=password]").clear();

    // enter valid username and password
    cy.get("[name=username]").type(Cypress.env("newUser"));
    cy.get("[name=password]").type(Cypress.env("newPassword"));
    cy.contains("button", "Sign Up").click();

    // still on /register page plus an error is displayed
    cy.location("pathname").should("equal", "/register");
    cy.contains(".alert-success", "Successfully Registered").should(
      "be.visible"
    );

    // now we can register as an existing user
    cy.contains("a", "Login").click();
    cy.contains("a", "Sign Up").click();
    cy.location("pathname").should("equal", "/register");

    // register as existing user
    cy.get("[name=username]").type(Cypress.env("newUser"));
    cy.get("[name=password]").type(Cypress.env("newPassword"));
    cy.contains("button", "Sign Up").click();

    // still on /register page plus an error is displayed
    cy.location("pathname").should("equal", "/register");
    cy.contains(".alert-danger", "This username is already in use").should(
      "be.visible"
    );
  });
});
