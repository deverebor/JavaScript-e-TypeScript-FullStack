// Tipo enum

enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
};

// Une os dois tipos

enum Cores {
  ROXO = 'ROXO',
  VERDE = 20,
  ROSA,
};

console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores);

function getCor(cor: Cores): void {
  console.log(Cores[cor]);
};

getCor(Cores.AZUL);
