// Tipo unkown é um tipo que não foi definido, ele é diferente do any.

let x: unknown;
let y = 10

x = "string";
x = 10;
x = 10;

if (typeof x === "number") console.log(x + y);