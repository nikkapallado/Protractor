let random = require('random-string-generator');

let contactUsPage = function(){
    let firstName_input = element(by.name('first_name'));
    let lastName_input = element(by.name('last_name'));
    let email_input = element(by.name('email'));
    let message_input = element(by.name('message'));
    let submit_button = element(by.css('input[type="submit"]'));
    let submissionMessage = element(by.css('div[id="contact_reply"] > h1'));
    let until = protractor.ExpectedConditions;

    this.goToPage = function(url){
        browser.get(url);
    }

    this.enterUniqueFirstName = function(){
        firstName_input.sendKeys(`AutoFN ${random(5)}`);
    }

    this.enterUniqueLastName = function(){
        lastName_input.sendKeys(`AutoLN ${random(5)}`);
    }

    this.enterUniqueEmail = function(){
        email_input.sendKeys(`${random(10)}@gmail.com`);
    }

    this.enterUniqueMessage = function(){
        message_input.sendKeys(`Hello World ${random(20)}`);
    }

    this.enterSpecificFirstName = function(firstName){
        firstName_input.sendKeys(firstName);
    }

    this.enterSpecificLastName = function(lastName){
        lastName_input.sendKeys(lastName);
    }

    this.enterSpecificEmail = function(email){
        email_input.sendKeys(email);
    }

    this.enterSpecificMessage = function(message){
        message_input.sendKeys(message);
    }

    this.clickSubmit = function(){
        submit_button.click();
    }

    this.waitAndValidateSubmissionMessage = function(){
        browser.wait(until.presenceOf(submissionMessage), 10000, 'Element taking too long to appear in the DOM');
        expect(submissionMessage.getText()).toEqual('Thank You for your Message!');
    }
}

module.exports = new contactUsPage();