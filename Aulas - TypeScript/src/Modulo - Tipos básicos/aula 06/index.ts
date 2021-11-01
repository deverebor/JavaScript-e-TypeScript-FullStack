// Tipo tupla

const clientData: readonly [number, string] = [1, 'Lucas']; // não pode ser alterado nada desta tupla.
const clientData2: [number, string, string] = [1, 'Lucas', 'Souza'];
const clientData3: [number, string, string?] = [1, 'Lucas'];

clientData2[0] = 2;
clientData2[1] = 'Souza';

clientData3.push('Silva')

console.log(clientData);
console.log(clientData2);
console.log(clientData3);