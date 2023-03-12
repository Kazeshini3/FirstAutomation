import { LoginService} from "../pagesnactions/login"
import HomePage from "../pagesnactions/Home.page"

describe("Tests login features", () => {
    it("Normal Log In filling in email an password", () => {
        HomePage.visit()
        LoginService.login()

    })    

    it("Login with fake email", () => {
        HomePage.visit()
        LoginService.login("fakeemailfake", "Password",true)


    })
    
    it("Login testing required fields", () => {
        HomePage.visit()
        LoginService.login("   ","   ",false, true)


    
    })

})
    
    