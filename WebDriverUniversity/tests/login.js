let loginPage = require('../pages/loginPage.js');

describe('L-001 - Login Page - Succesful Login', function(){
    beforeEach(function() { 
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        loginPage.goToPage('https://www.webdriveruniversity.com/Login-Portal/index.html?');
    }); 

    it('TC-001 - Can login successfully with valid username and password', async function(){
        loginPage.enterUsername('webdriver');
        loginPage.enterPassword('webdriver123');
        loginPage.clickLoginButton();
        loginPage.waitAndValidateSuccessfulLogin();
    })
})

describe('L-002 - Login Page - Failed Login', function(){
    beforeEach(function() { 
        browser.ignoreSynchronization = true;
        loginPage.goToPage('https://www.webdriveruniversity.com/Login-Portal/index.html?');
    }); 

    it('TC-001 - Can login unsuccessfully with invalid username and password', async function(){
        loginPage.enterUsername('incorrectUsername');
        loginPage.enterPassword('password123');
        loginPage.clickLoginButton();
        loginPage.waitAndValidateSuccessfulLogin();
    })

    it('TC-002 - Can login unsuccessfully with valid username but invalid password', async function(){
        loginPage.enterUsername('webdriver');
        loginPage.enterPassword('password123');
        loginPage.clickLoginButton();
        loginPage.waitAndValidateSuccessfulLogin();
    })
})