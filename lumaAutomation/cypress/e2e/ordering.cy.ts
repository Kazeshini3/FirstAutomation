import { checkout } from "../pagesnactions/checkoutOrdering"
import HomePage from "../pagesnactions/Home.page"
import { Cart } from "../pagesnactions/addCart"
import { LoginService } from "../pagesnactions/login"
import { Reorder } from "../pagesnactions/reOrder"

describe("Testing checkout page and ordering a product", () => {
    it("Visits the home page and logs in", () => {
        HomePage.visit()
        LoginService.login()
        Cart.addItemCart()
        checkout.checkout()
    }),



    it("Reoders a product when you are logged in your account", () => {
        HomePage.visit()
        LoginService.login()
        Reorder.reOrder()

    })  

})


