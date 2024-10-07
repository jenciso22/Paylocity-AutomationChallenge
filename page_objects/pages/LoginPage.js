import { Selector, t  } from "testcafe";

class LoginPage{
    constructor(){

        this.emailInput = Selector('#Username')
        this.passwordInput = Selector('#Password')
        this.loginButton = Selector('button[type="submit"]')
        this.errorMessage = Selector('div[class="text-danger validation-summary-errors"] ul li')

    }

    async submitLoginForm(email, password){
        await t
        .typeText(this.emailInput, email)
        .typeText(this.passwordInput, password)
        .click(this.loginButton)
    }
    async submitLoginEdgeCase(email){
        await t
        .typeText(this.emailInput, email)
        .click(this.loginButton)
    }

}

export default new LoginPage