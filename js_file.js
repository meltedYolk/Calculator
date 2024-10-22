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