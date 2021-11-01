let nameDog: string;
let age: number;
let adult: boolean;
let symbol: symbol;
let big: bigint;

let numberArray: number[];
let stringArray: string[];

// Array de objetos
numberArray = [1, 2, 3, 4, 5];
stringArray = ["a", "b", "c", "d", "e"];

console.log(numberArray);
console.log(stringArray);

// Objetos
let person: {
  name: string;
  age: number;
  adult?: boolean;
}

person = {
  name: "Lucas",
  age: 20,
  adult: true,
}

console.log(person.adult);

// Funções
// dentro do parametro diz o tipo dos parametros da função. Quando tipasse externamete é o retorno da função.

function sum(x: number, y:number): number { 
  return x + y;
}

const result = sum(2, 2);

console.log(result);

const sum2: {x: number, y: number} = {
  x: 2,
  y: 2,
}
