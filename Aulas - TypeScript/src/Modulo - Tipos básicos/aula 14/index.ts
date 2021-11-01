// Intersection Types

type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge;

const person: Person = {
  name: 'Lucas',
  lastName: 'Souza',
  age: 20,
};

console.log(person)
 
export { person };