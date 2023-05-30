let calculatorPage = function() {
        let firstNumber_input = element(by.model('first'));
        let secondNumber_input = element(by.model('second'));
        let operator_option = element.all(by.options('value for (key, value) in operators'));
        let gobutton = element(by.id('gobutton'));
        let result_container = element(by.css('h2'));

        this.goToPage = function (url) {
            browser.get(url);
        };

        this.enterFirstNumber = function (value) {
            firstNumber_input.sendKeys(value);
        };

        this.enterSecondNumber = function (value) {
            secondNumber_input.sendKeys(value);
        };

        this.chooseOperator = function (operator) {
            let options = ['+', '/', '%', '*', '-'];
            operator_option.get(options.indexOf(operator)).click();
        };

        this.clickGoButton = function () {
            gobutton.click();
        };

        this.waitAndCheckForResult = function (expected_result) {
            browser.waitForAngular(result_container).then(function () {
                expect(result_container.getText()).toBe(expected_result.toString());
            });
    }
}

module.exports = new calculatorPage();