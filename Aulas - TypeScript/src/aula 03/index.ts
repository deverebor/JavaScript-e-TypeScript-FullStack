// Tipo void

function notReturn(...args: string[]): void {
  console.log(args.join(' '));
};

const person = {
  name: 'Lucas',
  secondName: 'Souza',

  showName(): void {
    console.log(`Seu nome é: ${this.name}.\nSeu Sobrenome é: ${this.secondName}.`);
  }
};

person.showName();

export { person };