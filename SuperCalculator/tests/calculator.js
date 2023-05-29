describe('SCT001 - Super Calculator Test', function(){
    it('TC001 - Can add two numbers', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        let firstNumber = element(by.model('first'));
        firstNumber.sendKeys(5);

        let operator = element.all(by.options('value for (key, value) in operators'));
        operator.click();
        operator.first().click();

        let secondNumber = element(by.model('second'));
        secondNumber.sendKeys(4);

        element(by.id('gobutton')).click();

        browser.waitForAngular(element('h2')).then(function(){
            expect(element(by.css('h2')).getText()).toBe('9');
        });
    });

    // it('TC002 - Can subtract two numbers', function(){

    // });
});