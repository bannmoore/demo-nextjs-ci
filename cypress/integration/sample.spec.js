describe("Sample test", () => {
  it("should load up the app home page", () => {
    cy.visit("/");

    cy.contains("Welcome to Next.js");
  });
});
