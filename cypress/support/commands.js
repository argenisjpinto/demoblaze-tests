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

Cypress.Commands.add('goToDemoblazePage', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.m-0.text-center.text-white').should('be.visible').and('have.text','Copyright © Product Store 2017')
})

Cypress.Commands.add('loginDemoblazePage', (username, password) => {
    cy.get('#login2').should('be.visible').click()
    cy.get('#loginusername').clear().wait(500).type(username,{delay: 50})
    cy.get('#loginpassword').clear().wait(500).type(password,{delay: 50})
    cy.contains('.btn.btn-primary','Log in').should('be.visible').click()
    cy.get('#nameofuser').should('be.visible').and('have.text','Welcome ' + username)
})

Cypress.Commands.add('comprarArticulo', (categorie, model) => {
    cy.contains('#itemc',categorie).should('be.visible').click()
    cy.contains('.hrefch',model).should('be.visible').click()
    cy.contains('.name',model).wait(500).should('be.visible').and('have.text',model)
    cy.get('.btn.btn-success.btn-lg').should('be.visible').dblclick()
    cy.get('#cartur').should('be.visible').click()
    cy.contains('#tbodyid',model).should('be.visible')
    cy.get('[data-target="#orderModal"]').wait(500).should('be.visible').click()
})

Cypress.Commands.add('realizarCompra', (name, country, city, card, month, year) => {
    cy.get('#orderModalLabel').wait(500).should('be.visible').and('have.text','Place order')
    cy.get('#name').clear().wait(500).type(name,{delay: 50})
    cy.get('#country').clear().wait(500).type(country,{delay: 50})
    cy.get('#city').clear().wait(500).type(city,{delay: 50})
    cy.get('#card').clear().wait(500).type(card,{delay: 50})
    cy.get('#month').clear().wait(500).type(month,{delay: 50})
    cy.get('#year').clear().wait(500).type(year,{delay: 50})
    cy.get('[onclick="purchaseOrder()"]').should('be.visible').click()
    cy.get('.sweet-alert > h2').should('be.visible').and('have.text','Thank you for your purchase!')
    cy.get('.confirm').should('be.visible').click()
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').should('be.visible').click()
})

Cypress.Commands.add('logoutDemoblaze', () => {
    cy.get('#logout2').wait(500).should('be.visible').click()
})

