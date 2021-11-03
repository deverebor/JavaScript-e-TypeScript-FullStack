// Tipo array

export function multiplyArgs(...args: number[]) {
  return args.reduce((acc, curr) => acc * curr);
};

export function concatString(...args: string[]) {
  return args.reduce((ac, curr) => ac + curr);
};

export function changeStringToUpperCase(...args: string[]) {
  return args.map(arg => arg.toUpperCase());
};

const resultMult = multiplyArgs(1, 2, 3);
const resultConact = concatString('1', '2', '3');
const resultUpper = changeStringToUpperCase('koe mané, meteu essa ?', 'ele meteu essa serin ?');

console.log(resultMult);
console.log(resultConact);
console.log(resultUpper);