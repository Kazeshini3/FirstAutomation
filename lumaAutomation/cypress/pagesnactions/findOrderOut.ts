


export class Order {
    
    static findsOrder(order = Cypress.env("orderNumber"), name = Cypress.env("lastName"),  zip = Cypress.env("zip"), email = Cypress.env("email"), isZip = false) {
    
    //Finds order by its zip

        if (isZip) {
            const orders = Cypress.env('ordersUrl')
            cy.visit(orders)
            cy.contains("Orders and Returns").should("be.visible")
            cy.get('#oar-order-id').type(order)
            cy.get('#oar-billing-lastname').type(name)
            cy.get('#quick-search-type-id').select('zip').should('have.value', 'zip'),
            
            cy.wait(1000)
            
            cy.get("#oar_zip").type(zip)
            cy.contains("Continue").click()
            cy.contains("Order # 000020362").should("be.visible")
             return

            

        }
       
       
    //Finds order by email

        const orders = Cypress.env('ordersUrl')
        cy.visit(orders)
        cy.contains("Orders and Returns").should("be.visible")
        cy.get('#oar-order-id').type(order)
        cy.get('#oar-billing-lastname').type(name)
        cy.wait(1000)

        cy.get('#oar_email').type(email)
        cy.contains("Continue").click()
        cy.contains("Order # 000020362").should("be.visible")

    


    }
}

