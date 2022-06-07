/// <reference types="Cypress" />

describe("Boook a meeting via Calendly web app", () => {
    it("Should be able to succesfully book a meeting using minium input required", () => {
        cy.visit("https://calendly.com/agatha-stedman-guider/30min")
        cy.get('#onetrust-reject-all-handler').click()
        cy.get('tbody[data-testid="calendar-table"] td[aria-selected="false"]').first().click()
        cy.get('[role=listitem]').first().click()
        cy.get("[data-container='confirm-button']").first().click()
        cy.url().should('include', '?month=')
        cy.get('#full_name_input').type("Jane Doe")
        cy.get('#email_input').type("jane.doe@example.com")
        cy.get('button[type=submit]').click()
        cy.get("[data-component='confirmation-header']").contains('Confirmed')
    })     
})