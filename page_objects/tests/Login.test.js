import { CREDENTIALS, URLS, INVALIDCREDENTIALS } from "../data/Constants";
import loginPage from '../pages/LoginPage'
import dashboardPage from "../pages/DashboardPage";




fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`



test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
        await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL, CREDENTIALS.STANDARD_USER.PASSWORD)
        await t.expect(dashboardPage.titleDashboard.innerText).contains('Paylocity Benefits Dashboard')
}).meta(
    'type','smoke'
  )

test('As a user, I should not be able to log in successfully by providing invalid password', async t => {

    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL, INVALIDCREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains('The specified username or password is incorrect.')
    
}).meta(
    'type','smoke'
  )

/*
test('As a user, I should not be able to log in successfully by providing invalid email', async t => {

    await loginPage.submitLoginForm(INVALIDCREDENTIALS.INVALID_USER.EMAIL, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains('The specified username or password is incorrect.')
    
})*/

test('As a user, I should not be able to log in successfully by providing Blank Password', async t => {

    await loginPage.submitLoginEdgeCase(INVALIDCREDENTIALS.INVALID_USER.EMAIL)
    await t.expect(loginPage.errorMessage.innerText).contains('The Password field is required.')
    
})
