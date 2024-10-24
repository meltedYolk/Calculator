const operators = "+-x/";
let recordedInput = [];

// only math function that works with strings, so need to parse into numbers
function add(addend1, addend2) {
    return parseFloat(addend1) + parseFloat(addend2);
}
function subtract(subtractee, subtractor) {
    return subtractee - subtractor;
}
function multiply(factor1, factor2) {
    return factor1 * factor2;
}
function divide(dividend, divisor) {
    if(divisor === 0)                   // check for div by 0, return error message
        return "OOPS AT DIVIDE";
    return dividend / divisor;
}

// performs math function based on operator
// puts result @ front of recorded numbers array
function operate(operator, num1, num2) {    // call when = button clicked, only performs 1 calculation
    let result;
    switch(operator) {                  // choose and use operation based on operator
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log("operate() broke!");
    }

    inputNumbers.unshift(result);   // input result of operations back into recorded values
    return result; // return final result
}
function intializeButtonsAndDisplay() { // void, displays on screen and updates array of numbers
    const screen = document.querySelector(".screen");
    const clearButton = document.querySelector(".clear");
    const equalButton = document.querySelector(".equal");
    const calcButtons = document.querySelectorAll(".calc_button");
    clearButton.addEventListener("click", () => {   // clear erases screen content & erases recorded input
        screen.textCosntent = "";
        recordedInput.length = 0;
    });
    equalButton.addEventListener("click", () => {   // performs all calculations on screen, leaves 1 total value on screen/recorded.numbers
        let operator, num1, num2, result;
        let numbers = [], numValue = "";
        for(let i = 0; i < recordedInput.length; ++i) { // filter for numbers
            if(operators.includes(recordedInput[i])) {
                numbers.push(parseFloat(numValue));
                numValue = ""; }
            else if(i+1 == recordedInput.length) {
                numValue += recordedInput[i];
                numbers.push(parseFloat(numValue));
                numValue = ""; }
            else
                numValue += recordedInput[i];
        }
        /* turn recordedInput into array
            make two filtered arrays from recInput, numbers(check multiple) and operators
                operators: filter for only +-x/
                numbers: IF char is operator, record and reset numValue (ignores current char).
                         ELSE IF next char is end of values, add last char to numValue record and reset numValue  
                         ELSE char is #, add char to numValue
                    REPEAT 
            for each operator, perform calc on two numbers UNTIL no operators OR only 1 number */
        
        let operations = recordedInput.filter((val) => operators.includes(val));

        screen.textContent = result; // update display
    });
    calcButtons.forEach((calcBtn) => {  
        calcBtn.addEventListener("click", () => {
            let input = calcBtn.textContent // input from button (ex: 2, -, 5, only single chars)
            recordedInput.push(input);
            if(operators.includes(input)) // if input is operator, put spaces around display 
                screen.textContent += " " + calcBtn.textContent + " ";
            else                            // input is a number, no need for space on display
                screen.textContent += calcBtn.textContent;
        })
    });
}

intializeButtonsAndDisplay();