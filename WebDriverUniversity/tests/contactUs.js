let contactUsPage = require('../pages/contactUsPage.js');

describe('CU-001 - Contact Us Page - Succesful Submission', function(){
    beforeEach(function() { 
        browser.ignoreSynchronization = true;
        contactUsPage.goToPage('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
    }); 

    it('TC-001 - Can Submit Successfully Using Unique Data', function(){
        contactUsPage.enterUniqueFirstName();
        contactUsPage.enterUniqueLastName();
        contactUsPage.enterUniqueEmail();
        contactUsPage.enterUniqueMessage();
        contactUsPage.clickSubmit();
        contactUsPage.waitAndValidateSubmissionMessage();

    })

    it('TC-002 - Can Submit Successfully Using Specific Data', function(){
        contactUsPage.enterSpecificFirstName(`Sarah`);
        contactUsPage.enterSpecificLastName(`Woods`);
        contactUsPage.enterSpecificEmail(`sarah_woods123@gmail.com`);
        contactUsPage.enterSpecificMessage(`How are you today?`);
        contactUsPage.clickSubmit();
        contactUsPage.waitAndValidateSubmissionMessage();

    })
})