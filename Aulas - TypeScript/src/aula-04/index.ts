//Tipo objeto

const objA: {
  readonly keyA: string; // Só pode ser lido
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'value A',
  keyB: 'value B',
};

objA.keyB = 'Another value';
objA.keyC = 'value C';
objA.keyD = 'value D';

console.log(objA);