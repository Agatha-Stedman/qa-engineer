/// <reference types="Cypress" />

describe("Boook a meeting via Calendly web app", () => {
    it("Should be able to succesfully book a meeting using minium input required", () => {
        cy.visit("https://calendly.com/agatha-stedman-guider/30min")

        // click 'Reject all' button within the cookie consent banner
        // click first available (light blue) date within the calendar
        // click first available slot within the slot list (if date is availbe then it must be at least one slot)
        // click the 'Confirm' button for the selected slot
        // assert that moved to the specific slot booking page 
        // fill in the name input
        // and fill in the email input
        // click the submit button 
        // assert confirmation message appears
    })     
})