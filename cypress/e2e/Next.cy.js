describe("Main test", () => {
  it("should have a page", () => {
    cy.visit("/");
  });
  it("should have a link", () => {
    cy.get("a").should("have.value", "");
  });
  it("should have a title", () => {
    cy.visit("/");

    cy.get("#title").should("have.text", "Главная страница");
  });
});

describe("todo test", () => {
  it("should have a page", () => {
    cy.visit("/todo");
  });

  it("should have a buttons", () => {
    cy.get("#fetchTodoBtn").should("have.text", "fetch todo");
    cy.get("#xBtn").should("have.text", "X");
  });

  it("should have a checkboxes", () => {
    cy.get("input[type='checkbox']");
  });

  it("should complete a first task", () => {
    cy.get("input[type='checkbox']:first").click().should("have.checked");
  });

  it("should uncomplete a first task", () => {
    cy.get(".todo input:first").click().should("not.have.checked");
  });

  it("should delete last 2 tasks", () => {
    cy.get(".todo button:last").click();
    cy.get(".todo").should("have.length", 2);

    cy.get(".todo:last-child button").click();
    cy.get(".todo").should("have.length", 1);
  });

  it("should fetch a tasks", () => {
    cy.get("#fetchTodoBtn").click();
  });
});

describe("counter test", () => {
  it("should have a page", () => {
    cy.visit("/counter");
  });

  it("should have a text", () => {
    cy.get("#text").should("have.text", "Count + timer =600");
  });

  it("should have a buttons", () => {
    cy.contains("+");
    cy.contains("-");
  });
  it("should increment", () => {
    cy.get("button:first").click();
    cy.get("#text").should("have.text", "Count + timer =601");
  });
  it("should decrement", () => {
    cy.get("button:last").click();
    cy.get("#text").should("have.text", "Count + timer =600");

    cy.get("button:last").click();
    cy.get("#text").should("have.text", "Count + timer =599");
  });
});
