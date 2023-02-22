/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();
import { labelToName } from "../../src/utils/conversions";

describe("Login spec", () => {
  const fakeEmail = "wrong@email.com";
  const testEmail = "test@cypress.com";
  const password = "ValidPassword23";
  const newOptionValue = chance.name();

  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
    const loginButton = cy.get("button").contains(/sign in/i);
    const emailField = cy.get("input[name=email]");
    const passwordField = cy.get("input[name=password]");
    emailField.type(testEmail);
    passwordField.type(password);
    loginButton.click();
    cy.location().should(({ href }) => {
      expect(href).to.eq("http://localhost:5173/home");
    });
  });

  it("Logs out and tests sign in functionality", () => {
    cy.get("button[name='user-menu']").click();
    cy.get("#menu-item-logout").click();
    cy.location().should(({ href }) => {
      expect(href).to.eq("http://localhost:5173/login");
    });
    const loginButton = cy.get("button").contains(/sign in/i);
    const emailField = cy.get("input[name=email]");
    const passwordField = cy.get("input[name=password]");
    loginButton.click();
    cy.contains("Please make sure you enter a valid Email and Password");
    emailField.type(fakeEmail);
    passwordField.type(password);
    loginButton.click();
    cy.contains("Email or Password are wrong!");
    emailField.clear();
    passwordField.clear();
    emailField.type(testEmail);
    passwordField.type(password);
    loginButton.click();
    cy.location().should(({ href }) => {
      expect(href).to.eq("http://localhost:5173/home");
    });
  });

  it("Adds a new category", () => {
    const inventoryButton = cy.get("#nav-inventory");
    inventoryButton.click();
    const newItemButton = cy.get("button[name='newItem']");
    newItemButton.click();
    const newCategoryButton = cy.get("button[name='newCategory']");
    newCategoryButton.click();
    const newOptionInput = cy.get("input[name='newOption']");
    const saveOptionButton = cy.get("button[name='saveOption']");
    newOptionInput.type(newOptionValue);
    saveOptionButton.click();
    const categorySelectInput = cy.get("#Category");
    categorySelectInput.click();
    cy.contains(newOptionValue);
  });

  it("Selects and edits category form", () => {
    const textTabId = "#tab-0";
    const selectTabId = "#tab-1";
    const toggleTabId = "#tab-2";
    const checkboxTabId = "#tab-3";

    const inventoryButton = cy.get("#nav-inventory");
    inventoryButton.click();
    const newItemButton = cy.get("button[name='newItem']");
    newItemButton.click();
    const categorySelectInput = cy.get("#category");
    categorySelectInput.click();
    cy.get("#category-option-0").click();
    cy.get("#edit-category-form").click();
    const textFields = [chance.city(), chance.city(), chance.city()];
    for (const field in textFields) {
      cy.get("input[name='label']").type(textFields[field]);
      cy.get("button[name='type-text']").click();
      cy.get("input[name='required']").click();
      cy.get("button[name='textfield-add']").click();
      const newField = cy.get(
        `input[name='${labelToName(textFields[field])}']`
      );
      newField.type("Testing text field");
      newField.clear();
    }
    cy.get(selectTabId).click();
    const selectFields = [
      {
        name: `${chance.name()} Pets`,
        options: [chance.animal(), chance.animal(), chance.animal()],
      },
      {
        name: `${chance.name()} Pets`,
        options: [chance.animal(), chance.animal(), chance.animal()],
      },
      {
        name: `${chance.name()} Pets`,
        options: [chance.animal(), chance.animal(), chance.animal()],
      },
    ];
    for (const field in selectFields) {
      cy.get("input[name='label']").type(selectFields[field].name);
      cy.get("input[name='required']").click();
      for (const pet in selectFields[field].options) {
        cy.get("input[name='options']").type(selectFields[field].options[pet]);
        cy.get("button[name='add-lister-option']").click();
      }
      cy.get("button[name='selectField-add']").click();
      const newInputName = labelToName(selectFields[field].name);
      const newInput = cy.get(`input[name='${newInputName}']`);
      newInput.click();
      newInput.type(selectFields[field].options[0]);
    }
    const toggleFields = [
      {
        name: "toggle-0",
        options: [chance.country(), chance.country()],
      },
      {
        name: "toggle-1",
        options: [chance.country(), chance.country()],
      },
      {
        name: "toggle-2",
        options: [chance.country(), chance.country()],
      },
    ];
    cy.get(toggleTabId).click();
    for (const field in toggleFields) {
      cy.get("input[name='name']").eq(1).type(toggleFields[field].name);
      cy.get("input[name='editable']").click();
      for (const country in toggleFields[field].options) {
        cy.get("input[name='options']").type(
          toggleFields[field].options[country]
        );
        cy.get("button[name='add-lister-option']").click();
      }
      cy.get("button[name='toggleField-add']").click();
      cy.get(
        `button[name='${toggleFields[field].name}-${labelToName(
          toggleFields[field].options[1]
        )}']`
      ).click();
      cy.get(
        `button[name='${toggleFields[field].name}-${labelToName(
          toggleFields[field].options[0]
        )}']`
      ).click();
    }
    const checkboxFields = [
      chance.month(),
      chance.month(),
      chance.month(),
      chance.weekday(),
      chance.weekday(),
      chance.weekday(),
    ];
    checkboxFields.forEach((field) => {
      cy.get(checkboxTabId).click();
      cy.get("input[name='label']").type(field);
      cy.get('[style="left: 25%;"]').click();
      cy.get("button[name='checkboxField-add']").click();
      cy.get(`input[name='${labelToName(field)}']`).click();
      cy.get(`input[name='${labelToName(field)}']`).click();
    });
  });
});
