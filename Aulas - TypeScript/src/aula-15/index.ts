// Funções como tipos

type MapStringsCallback = (item: string) => string;

export function mapStrings(array: string[], callbackFN: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    newArray.push(callbackFN(item));
  };

  return newArray;
};

const arrayUpperCase = ['a', 'b', 'c'];
const arrayMapped = mapStrings(arrayUpperCase, item => item.toUpperCase());

console.log(arrayMapped);
