//Type Aliases
//Type Aliases are forms to represent the Typescript types with different names
type stringOrNumber = string | number;

type stringOrNumberArray  = (string | number) [];

type registration = {
    name?: string;
    //A question mark makes the property optional
    age: number,
    dependents:(string) [];
}
type userID = stringOrNumber;

//Literal types
//The only acceplable value for myName is Edgar
let myName: 'Edgar';

//But for userMame, it is possible to reassign it as Amy, Sara or Edgar beacuse it is set as a union type of these values upon declaration.
let userName : 'Amy' | 'Sara' | 'Edgar'
userName = 'Sara';
userName = 'Amy';
userName ='Edgar';

//functions
const sum = (a: number, b: number): number =>{
    return a + b;
}

const logMessage = (message: any): void =>{
    console.log(message);
}
logMessage('Hello');
logMessage(sum(3,5));

let subtract = (c: number, d: number): number =>{
    return c - d;
}
logMessage(subtract(4,7));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function(e: number, f: number){
    return e * f;
}
logMessage(multiply(2,8))

//optional parameters
const addAll = (a: number, b: number, c?:number): number =>{
    if(typeof c !== 'undefined'){
    return a + b + c;
    }
    return a + b;
}


const sumAll = (a: number, b: number, c:number = 7): number =>{ 
    return a + b + c;
}
logMessage(addAll(5,2,3));
logMessage(addAll(5,2));
logMessage(sumAll(5,2,4));
logMessage(sumAll(5,2));

// Rest parameters

const total = (a: number, ...nums: number[]): number =>{

    return a + nums.reduce((prev,  curr) => prev +curr);

}

logMessage(total(1,2, 3, 4));

const createError = (errorMessage: string) =>{
    
    throw new Error(errorMessage);

}

const infinite = ()=>{
    let i: number = 1;
    while(true){
        i++;
        if(i > 100) break
    }
}

//custom type guard
const isNumber = (value: any): boolean =>{
    return typeof value === 'number' ? true : false;
}

//use of the never type
const numberOrString = (value: number | string): string =>{

    if(typeof(value) === 'string') return 'string';
    if(isNumber(value)) return 'number';
    return createError(`This souldn't happen`);
}

