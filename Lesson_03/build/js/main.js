"use strict";
let stringArray = ['One', 'Hey', 'Edgar'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['abc', 333, true];
stringArray[0] = 'Lena';
stringArray.push('Hey');
guitars[0] = 1984;
guitars.unshift('Mark');
guitars = stringArray;
let test = [];
let bands = [];
bands.push('Spiritbox');
//Tuples are special arrays with defined types for each position
let firstTuple = ['Alex', 18, false];
let mixed = ['Anna', 15, true];
//you can set an array with tuples values, as long as they have the same data types 
mixed = firstTuple;
/*but you cannot set tuples with array values, because there's a chance that the array might have less elements than the tuple.
(Even if they have the same data types)*/
//firstTuple = mixed;
firstTuple[0] = 'Jim';
//objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObject = {
    name: 'Maria',
    age: 28,
};
exampleObject.name = 'Lars';
let person = {
    name: 'Diana',
    age: 34,
    dependents: ['David', 'Mark'],
};
let person2 = {
    name: 'Evan',
    age: 40,
    dependents: ['Alice'],
};
person = person2;
person.age = 54;
person.name = undefined;
console.log(person);
const greetPerson = (p) => {
    var _a;
    //if you're going to use a funcion in an optional element, you have to use a condition wheter if it defined or not 
    if (p.name) {
        return `Hello, ${(_a = p.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetPerson(person));
// Enumerated types, often called enumerations or enums, are a special kind of class used to represent a fixed number of constant values.
var grade;
(function (grade) {
    grade[grade["U"] = 1] = "U";
    grade[grade["D"] = 2] = "D";
    grade[grade["C"] = 3] = "C";
    grade[grade["B"] = 4] = "B";
    grade[grade["A"] = 5] = "A";
})(grade || (grade = {}));
console.log(grade);
