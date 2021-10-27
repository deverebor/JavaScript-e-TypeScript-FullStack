//array para filtrar o nome dos clientes e retornar apenas os que começam com a letra 'L'
// const arrayClientes = ['Lucas', 'Maria', 'Geise']

// let clienteL = arrayClientes.filter(cliente => cliente[0] === 'L')

//Retorne os números maiores que 10
const numeros = [5, 10, 15, 20, 25, 30]

function callbackFilter(numero) {
  return (numero > 20)
}

const numerosFiltrados = numeros.filter(callbackFilter)

console.log(numerosFiltrados)