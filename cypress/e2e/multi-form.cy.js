describe("template spec", () => {
  it("Correctly validates fields and submits the form", () => {
    const name = "name";
    const lastName = "lastName";
    const phone = "12345678";
    const email = "email@email.com";

    cy.visit("/");

    cy.contains("Next").click();

    cy.contains("First name is a required field");

    cy.contains("Last name is a required field");

    cy.get("[data-testid=firstName]").type(name);

    cy.get("[data-testid=lastName]").type(lastName);

    cy.contains("Next").click();

    cy.get("[data-testid=phone]").type("abc");

    cy.get("[data-testid=email]").type("incorrect email");

    cy.contains("Submit form").click();

    cy.contains("Phone should contain only numbers");

    cy.contains("Email should have correct format");

    cy.get("[data-testid=phone]").clear().type(phone);

    cy.get("[data-testid=email]").clear().type(email);

    cy.contains("Submit form").click();

    cy.contains(name);

    cy.contains(lastName);

    cy.contains(phone);

    cy.contains(email);
  });
});
