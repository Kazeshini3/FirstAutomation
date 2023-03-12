

//Clears cart (With only one item)

class Clear {
    
    static clearCart() {
        const url = Cypress.env('homeUrl')
        cy.visit(url)
        cy.get('.showcart').click()
        cy.get('.action-delete').click()
        cy.wait(3000)
        cy.get('.cart-empty > :nth-child(2)').should('be.visible')

    }
}

export default Clear