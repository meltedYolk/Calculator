const operators = "+-x/=";

function add(addend1, addned2) {
    return addend1 + addned2;
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
function intializeButtonsAndDisplay() { // void, displays on screen and updates array of numbers
    const screen = document.querySelector(".screen");
    const clearButton = document.querySelector(".clear");
    const calcButtons = document.querySelectorAll(".calc_button");
    clearButton.addEventListener("click", () => {   // clear erases screen content & any operations
        screen.textContent = "";
    });
    calcButtons.forEach((calcBtn) => {  
        calcBtn.addEventListener("click", () => {
            let input = calcBtn.textContent // input from button
            if(operators.includes(input)) // if input is operator, put spaces around
            {
                console.log("last isn't a number, add as pace");
                screen.textContent += " " + calcBtn.textContent + " ";
            }
            else // input is a number, no need for space
            {
                screen.textContent += calcBtn.textContent;                
            }
        })
    });
}

intializeButtonsAndDisplay();