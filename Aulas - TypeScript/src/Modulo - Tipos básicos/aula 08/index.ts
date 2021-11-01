// Tipo never
// um erro ou laço infinito normalmente será utilizado para indicar que o código não deve mais continuar.

export function criaError(): never {
  throw new Error('Erro inesperado');
}

criaError();
