// Tipo null e undefined

let x;

if (typeof x === 'undefined') x = 20;

//console.log(x * 2);

export function createPerson(firstName: string, lastName?: string): { 
  firstName: string; 
  lastName?: string;
} {
  return {
      firstName: firstName,
      lastName: lastName
  }
}

export function squareOf(x: any) {
  if(typeof x === 'number') {
    return x * x;
  } 

  return null;
}

const squareOf3 = squareOf(3);

if(squareOf3 === null) {
  console.error('Não é um número');
} else {
  console.log(squareOf3);
}