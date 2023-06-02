//Generics are onftenly used when we don't know the type of data that will be assigned to a variable
const Echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}

console.log(isObj(true));
console.log(isObj([1, 2, 3]));
console.log(isObj('Anything'));
console.log(isObj({name: 'Elliott'}));
console.log(isObj(null));

//Generics are also veryysed when your function needs to implement some logic regarding the type that it will have to retur
const isTrue = <T>(arg: T): {arg: T, is: boolean}=>{
  if( Array.isArray(arg) && !arg.length){
    return{arg, is: false};
  }
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {arg, is: false}
  }
  return {arg, is: !!arg}
}

console.log('Part two')
console.log(isTrue(true));
console.log(isTrue([1, 2, 3]));
console.log(isTrue('Anything'));
console.log(isTrue({name: 'Elliott'}));
console.log(isTrue(null));
console.log(isTrue(''));
console.log(isTrue(NaN));
console.log(isTrue([]));
console.log(isTrue(0));
console.log(isTrue(1));
console.log(isTrue(undefined));
console.log(isTrue({}));

interface boolCkeck<T> {
  value: T,
  is: boolean,
}
const checkBoolValue = <T>(arg: T): boolCkeck<T>=>{
  if( Array.isArray(arg) && !arg.length){
    return{value: arg, is: false};
  }
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {value: arg, is: false}
  }
  return {value: arg, is: !!arg}
}

interface hasID{
  id: number
}

//In the process user function, we use extends property to narrow the generic type, making it mandatory for it to have an ID to use it
const processUser = <T extends hasID>(user: T) =>{
  //process the user with logic
  return user;
}

console.log('Part three')
console.log(processUser({id: 1, name: 'David'}));
//console.log(processUser({ name: 'David'}));


class StateObject<T> {
  private data: T;

  constructor(value: T){
    this.data = value;
  }
  get state(): T{
    return this.data;
  }

  set state(value: T){
    this.data = value;
  }
}

console.log('Part 4')
//When you directly put a type without informing possible values, typescript will only accept the type you first put in the class
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
//store.state = 7;

//Now if u set it wich many possibilities with an union type. It will accept any values, as long as it is one of the options first set in the union
const myState = new StateObject <(string | number | boolean)[]>([15])
console.log(myState.state)
myState.state = (['Denis', 77, false])
console.log(myState.state)