let calculatorPage = require('../pages/calculatorPage.js');

describe('SCT001 - Super Calculator Test', function(){
    it('TC001 - Can add two numbers', function(){
        calculatorPage.goToPage('http://juliemr.github.io/protractor-demo/');

        calculatorPage.enterFirstNumber(5);
        calculatorPage.enterSecondNumber(4);
        calculatorPage.chooseOperator('+');
        calculatorPage.clickGoButton();

        calculatorPage.waitAndCheckForResult(9);

        browser.sleep(3000);
    });

    it('TC002 - Can subtract two numbers', function(){
        calculatorPage.goToPage('http://juliemr.github.io/protractor-demo/');

        calculatorPage.enterFirstNumber(5);
        calculatorPage.enterSecondNumber(4);
        calculatorPage.chooseOperator('-');
        calculatorPage.clickGoButton();

        calculatorPage.waitAndCheckForResult(9);

        browser.sleep(3000);

    });
});