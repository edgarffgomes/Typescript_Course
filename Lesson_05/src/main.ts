//Colloquially, assertion is telling the Typescript compilers that you know more about the type than them

type One = string;
type Two = string | number;
type Three = 'Hello';


//convert to a more or less specific type
let a: One = 'Hello';
let b = a as Two; //assiging a less specific type (string or number)
let c = a as Three; //assigning a more specific type

let d = <One>'world' 
let e = <string | number>'world'

const addOrConcat = (a:number, b:number, c: 'add' | 'concat'): number |string =>{
  if(c === 'add') return a + b;
  return '' + a + b;
}

//the assertion command makes the compiler ignore the warning, because it tells it exactly the type to expect
let myVal: string = addOrConcat(2,2,'concat') as string;

//Be careful, because Typescript sees no problem here, byt a string IS RETURNED
let nextVal: number = addOrConcat(2,2,'concat') as number;

//10 as string
(10 as unknown) as string;

//Assertions are VERY useful with document object model (DOM)
const img = document.querySelector('img') as HTMLImageElement;
//The exclamation mark at the end tells TypeScript that this element isn't null
const myImg = document.getElementById('#img')!;
//If you tell TypeScript the exact type of the element, you won't need the exclamation mark
const mySecondImg = document.getElementById('#img') as HTMLImageElement;
//You can also use an angle bracket to assert the type (but be careful, because angle brackets don't work in TSX files)
const myThirdImg = <HTMLImageElement>document.getElementById('#img');


img.src
mySecondImg.src