export class Cart {
    
    static addItemCart (isCategory = false, isSearch = false) {

        //Adding item to cart from a category

        if (isCategory){
           
            cy.get('#ui-id-5 > .ui-menu-icon').trigger('mouseover')
            cy.get("#ui-id-17").click()
            cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()

            cy.wait(4000)

            cy.get('#option-label-size-143-item-168').click()
            cy.get('#option-label-color-93-item-50').click()
            cy.get('#qty').clear().type("10")
            cy.contains("Add to Cart").click()
        
            cy.wait(3000)

            cy.get('.showcart').click()
            cy.contains("Proceed to Checkout").should("be.visible")


            return

        }

        //Adding item from search to the cart

        if (isSearch){
           
            cy.get('#search').type("Portia Capri").type('{enter}') 
            cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()

            cy.wait(4000)

            cy.get('#option-label-size-143-item-171').click()
            cy.get('#option-label-color-93-item-50').click()
            cy.get('#qty').clear().type("20")
            cy.contains("Add to Cart").click()
        
            cy.wait(3000)

            cy.get('.showcart').click()
            cy.contains("Proceed to Checkout").should("be.visible")

            return

        }



        //Adding item from the Homepage to cart

        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        
        cy.wait(4000)

        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-56').click()
        cy.get('#qty').clear().type("30")
        cy.contains("Add to Cart").click()
        
        cy.wait(3000)

        cy.get('.showcart').click()
        cy.contains("Proceed to Checkout").should("be.visible")

    }

}