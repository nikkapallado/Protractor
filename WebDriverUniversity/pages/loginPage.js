let loginPage = function(){
    let username_input = element(by.id('text'));
    let password_input = element(by.id('password'));
    let login_button = element(by.id('login-button'));
    let alertDialog = browser.switchTo().alert().catch(e => console.log('caught:', e));;

    this.goToPage = function(url){
        browser.driver.get(url);
    }

    this.enterUsername = function(username){
        username_input.sendKeys(username);
    }

    this.enterPassword = function(password){
        password_input.sendKeys(password);
    }

    this.clickLoginButton = function(){
        login_button.click();
    }

    this.waitAndValidateSuccessfulLogin = function(){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 10000).then(function(){
            expect(alertDialog.getText()).toEqual('validation succeeded')
        });
    }

    this.waitAndValidateFailedLogin = function(){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 10000).then(function(){
            expect(alertDialog.getText()).toEqual('validation failed')
        });
    }
}

module.exports = new loginPage();
