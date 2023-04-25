let username: string = 'Lily';
let meaningOfLife: number;
let isLoading: boolean;
//the type any lets the variable have any type as its value (similar to what happens with all JavaScript variables)
let album: any;
//the variable album2 is of the union type, the union type lets the variable have any of the types that were declared upon declaration.
let album2: string | number;


username = 'Jessie'
meaningOfLife = 42;
isLoading = false;

album = 'Turn Off The Light'
album = true;
album2 = 'Renaissance'
album2 = 4;

const sum = (a: number,b: string) =>{
    return a + b;
}

let postId: string | number;
let isActive: number | boolean;
//this regular expression selects all words
let re: RegExp = /\w+/g;