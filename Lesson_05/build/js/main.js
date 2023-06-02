"use strict";
//Colloquially, assertion is telling the Typescript compilers that you know more about the type than them
//convert to a more or less specific type
let a = 'Hello';
let b = a; //assiging a less specific type (string or number)
let c = a; //assigning a more specific type
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//the assertion command makes the compiler ignore the warning, because it tells it exactly the type to expect
let myVal = addOrConcat(2, 2, 'concat');
//Be careful, because Typescript sees no problem here, byt a string IS RETURNED
let nextVal = addOrConcat(2, 2, 'concat');
//10 as string
10;
//Assertions are VERY useful with document object model (DOM)
const img = document.querySelector('img');
//The exclamation mark at the end tells TypeScript that this element isn't null
const myImg = document.getElementById('#img');
//If you tell TypeScript the exact type of the element, you won't need the exclamation mark
const mySecondImg = document.getElementById('#img');
//You can also use an angle bracket to assert the type (but be careful, because angle brackets don't work in TSX files)
const myThirdImg = document.getElementById('#img');
img.src;
mySecondImg.src;
