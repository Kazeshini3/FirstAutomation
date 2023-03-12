export class checkout{

//Buys products that are in the cart

    static checkout() {
        const url = Cypress.env('homeUrl')
        cy.visit(url)
        cy.wait(6000)

        cy.get('.showcart').click()
        cy.contains("Proceed to Checkout").click()
        cy.wait(6000)

        cy.contains('Best Way').click()
        cy.wait(3000)

        cy.contains('Next').click()
        cy.contains('Place Order').click()
        cy.wait(3000)

        cy.contains('Thank you for your purchase').should('be.visible')
        

        
        
    }



}