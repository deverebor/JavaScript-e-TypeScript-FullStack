// Tipo any
// Deve ser evitado ao máximo. Como o TypeScript não sabe o tipo de uma variável, ele não pode saber se o valor é do tipo correto.

function showMessage(name: string[], message: number) {
    return `Olá ${name}! Seja Bem-Vindo! Você tem ${message} novas mensagens.`;
}

const wellcomeMessage = showMessage([
  'Lucas', 
  'Geise',
  'Wilson'
], 4);

console.log(wellcomeMessage);