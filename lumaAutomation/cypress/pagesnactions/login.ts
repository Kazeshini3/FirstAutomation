export class LoginService {
    
    static login (email = Cypress.env("email"), pass = Cypress.env("pass"), isFaked = false, isNotFilled = false) {
  
    //Tests if you use a fake email to log-in
     
    if (isFaked){  
        cy.contains('Sign In').click()
        cy.wait(1000)
        
        cy.get('#email').type(email)
        cy.get('#pass').type(pass)
        cy.get('#send2').click()
        
        cy.wait(3000)
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
        return

    }

    //Test if you dont fill in required fields to log-in

    if (isNotFilled){
        cy.contains('Sign In').click()
        cy.wait(1000)
        
        cy.get('#email').type(email)
        cy.get('#pass').type(pass)
        cy.get('#send2').click()
        
        cy.wait(5000)
        cy.contains('This is a required field').should('be.visible')
        return
    }

    //Normal Log-in

    cy.contains('Sign In').click()
        
    cy.wait(1000)
    
    cy.get('#email').type(email)
    cy.get('#pass').type(pass)
    cy.get('#send2').click()
    
    cy.wait(3000)
    cy.contains('Welcome,')
   
    }
}

