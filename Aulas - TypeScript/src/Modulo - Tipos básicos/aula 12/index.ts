// Tipos Literais
let x = 10;
x = 0b1010;
const y = 10;
let a = 100; // subtipo de number

const person = {
  name: 'Lucas',
  sobrenome: 'Souza',
};

export function chosenColor(color: 'Vermelho' | 'Verde' | 'Violeta'): string {
  return color;
}

console.log(chosenColor('Vermelho'));

export default 0;