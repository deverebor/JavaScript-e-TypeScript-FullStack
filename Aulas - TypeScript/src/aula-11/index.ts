// Union Types

export function addOrConcat(x: number | string, y: number | string) {
  if(typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x}${y}`;
};

console.log(addOrConcat(2, 2));
console.log(addOrConcat('2', '2'));
console.log(addOrConcat(2, '2'));
console.log(addOrConcat('2', 2));
console.log(addOrConcat('true', 'true'));