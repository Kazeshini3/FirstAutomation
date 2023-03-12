import { LoginService } from "../pagesnactions/login"
import { Cart } from "../pagesnactions/addCart"
import Clear from "../pagesnactions/clearCart"
import HomePage from "../pagesnactions/Home.page"

describe("Testing Cart", () => {
    it("Adding product to cart from home page", () => {
        HomePage.visit()
        LoginService.login()
        Cart.addItemCart()
        Clear.clearCart()

    }) 

    it("Adding product to cart from a category", () => {
        HomePage.visit()
        LoginService.login()
        Cart.addItemCart(true)
        Clear.clearCart()

    })

    it("Adding product to cart from search", () => {
        HomePage.visit()
        LoginService.login()
        Cart.addItemCart(false,true)
        Clear.clearCart()

    })
})