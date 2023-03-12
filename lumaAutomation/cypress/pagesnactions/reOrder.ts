export class Reorder{


    //Reordering an especific order

    static reOrder() {
        const url = Cypress.env('homeUrl')
        cy.visit(url)
        cy.contains("Welcome, ")
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.contains("My Account").click()
        
        cy.wait(3000)
        cy.contains("My Orders")
        cy.get(':nth-child(1) > .actions > .order > span').click()

        cy.wait(6000)
        cy.contains("Shopping Cart").should("be.visible")
        cy.get('.checkout-methods-items > .item > .action').click()
        cy.wait(6000)

        cy.contains('Best Way').click()
        cy.wait(3000)

        cy.contains('Next').click()
        cy.wait(3000)
        
        cy.contains('Place Order').click()
        cy.wait(3000)

        cy.contains('Thank you for your purchase').should('be.visible')





    }
}