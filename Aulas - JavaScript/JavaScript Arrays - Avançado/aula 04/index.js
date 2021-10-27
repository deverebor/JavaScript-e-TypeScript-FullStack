//array para filtrar o nome dos clientes e retornar apenas os que começam com a letra 'L'
// const arrayClientes = ['Lucas', 'Maria', 'Geise']

// let clienteL = arrayClientes.filter(cliente => cliente[0] === 'L')
//Filter sempre retorna uma array com a mesma quantidade de elementos do array original ou menos.

// const numeros = [5, 10, 15, 20, 25, 30];

// const numerosFiltrados = numeros.filter(valor => valor >= 20);

// console.log(numerosFiltrados);

const pessoas = [
  { nome: 'Lucas', idade: 20 },
  { nome: 'Geisielle', idade: 18 },
  { nome: 'Zeus', idade: 21 },
  { nome: 'Hercules', idade: 43 },
  { nome: 'Carol', idade: 90 },
  { nome: 'Mirella', idade: 10 },
];

const pessoasComCincoLetras = pessoas.filter(pessoa => pessoa.nome.length >= 5);

console.log(pessoasComCincoLetras);

const pessoasComMaisDeDezoito = pessoas.filter(pessoa => pessoa.idade >= 50);

console.log(pessoasComMaisDeDezoito);

const pessoasQueTerminamComA = pessoas.filter(pessoa => pessoa.nome.endsWith('a'));

console.log(pessoasQueTerminamComA);
