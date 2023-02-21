/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// import { app } from "../../src/firebase-config";
// import {
//   getAuth,
//   browserPopupRedirectResolver,
//   connectAuthEmulator,
//   initializeAuth,
//   signInWithEmailAndPassword,
//   browserSessionPersistence,
// } from "firebase/auth";

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): void;
//       init(): void;
//     }
//   }
// }

// Cypress.Commands.add("login", (email, password) => {
//   signInWithEmailAndPassword(getAuth(app), email, password).then((v) => {
//     console.log("Logged in as:", email);
//   });
// });

// Cypress.Commands.add("init", () => {

//   const auth = initializeAuth(app, {
//     persistence: browserSessionPersistence,
//     popupRedirectResolver: browserPopupRedirectResolver,
//   });

//   connectAuthEmulator(auth, "http://localhost:9099");
// });
