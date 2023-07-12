// ***********************************************
// This example commands.js shows you how to
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

//Custom command for login
Cypress.Commands.add('login', (username, password) => 
{
    cy.visit("https://test.beta.firemate.dev/")
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()
})


Cypress.Commands.add('login', ()=> {
    cy.visit('https://test.beta.firemate.dev/Auth/Login?ReturnUrl=%2F')
    cy.get('#username').clear()
    cy.get('#username').type('Firemate')
    cy.get('#password').clear()
    cy.get('#password').type('firemaIwasonly19')
    cy.get('#login').click()
})

Cypress.Commands.add('logout', ()=> {
    cy.get('#usermenu').click()
    cy.get('#logout-menu-item').click()

  })