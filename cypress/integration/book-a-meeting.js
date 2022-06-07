/// <reference types="Cypress" />

describe("Boook a meeting via Calendly web app", () => {
    it("Should be able to succesfully book a meeting using minium input required", () => {
        cy.visit("https://calendly.com/agatha-stedman-guider/30min")

        // click 'Reject all' button within the cookie consent banner
        cy.get('#onetrust-reject-all-handler').click()
        // click first available (light blue) date within the calendar
        cy.get('tbody[data-testid="calendar-table"] td[aria-selected="false"]').first().click()
        // click first available slot within the slot list (if date is availbe then it must be at least one slot)
        cy.get(':nth-child(1) > .g5ly_JZq5ecQ4uPUKZEi').click()
        // click the 'Confirm' button for the selected slot
        cy.get('[data-container="selected-spot"] > .__S9RgeoIpcRpekvEbrL').click()
        // assert that moved to the specific slot booking page
        cy.url().should('include', '?month=')
        // fill in the name input
        cy.get('#full_name_input').type("Jane Doe")
        // and fill in the email input
        cy.get('#email_input').type("jane.doe@example.com")
        // click the submit button 
        cy.get('.Qv2k4eaDavATau4_x9Jy > .IOTsH6gplw0gNhzOtsQ7').click()
        // assert confirmation message appears
        cy.get('.Q5wdbrZZ369hztWiHRzv').should('have.text', 'Confirmed')
    })     
})