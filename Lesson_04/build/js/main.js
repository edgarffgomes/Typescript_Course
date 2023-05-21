"use strict";
//Literal types
//The only acceplable value for myName is Edgar
let myName;
//But for userMame, it is possible to reassign it as Amy, Sara or Edgar beacuse it is set as a union type of these values upon declaration.
let userName;
userName = 'Sara';
userName = 'Amy';
userName = 'Edgar';
//functions
const sum = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello');
logMessage(sum(3, 5));
let subtract = (c, d) => {
    return c - d;
};
logMessage(subtract(4, 7));
let multiply = function (e, f) {
    return e * f;
};
logMessage(multiply(2, 8));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 7) => {
    return a + b + c;
};
logMessage(addAll(5, 2, 3));
logMessage(addAll(5, 2));
logMessage(sumAll(5, 2, 4));
logMessage(sumAll(5, 2));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
const createError = (errorMessage) => {
    throw new Error(errorMessage);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof (value) === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError(`This souldn't happen`);
};
