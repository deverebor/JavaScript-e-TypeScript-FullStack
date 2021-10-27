//Função map - retorna um novo array com os resultados de uma função aplicada a cada elemento do array original

// const numeros = [5, 10, 15, 20, 25, 30];

// const numerosDobrados = numeros.map((valor) => {return `Lucas => ${valor * 2}`});

// console.log(numerosDobrados);

const pessoas = [
  { nome: 'Lucas', idade: 20 },
  { nome: 'Geisielle', idade: 18 },
  { nome: 'Zeus', idade: 21 },
  { nome: 'Hercules', idade: 43 },
  { nome: 'Carol', idade: 90 },
  { nome: 'Mirella', idade: 10 },
];

const pessoasUmaString = pessoas.map((pessoa) => {
  return `${pessoa.nome}`;
});

const somenteIdadeDasPessoas = pessoas.map((pessoa) => ({idade: pessoa.idade}));

const addIdNasPessoas = pessoas.map((pessoa) => {
  return {id: Math.random().toPrecision(+1), ...pessoa };
});

console.log(addIdNasPessoas)
