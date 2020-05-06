describe("Sample test", () => {
	it("should load up the app home page", () => {
		cy.visit("/");

		cy.contains("Welcome to Next.js");
		cy.contains("MY_ENV = foo");
		cy.contains("models = 0");
	});
});
