// Type aliases

type Age = number;
type colorRBG = 'Red' | 'Green' | 'Violet';
type colorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'White';
type favoriteColor = colorRBG | colorCMYK;

type Person = {
  name: string;
  lastName: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

const person: Person = {
  name: 'Lucas',
  lastName: 'Souza',
  age: 20,
  salary: 4200.00,
  favoriteColor: 'Red',
};

export function setFavoriteColor(person: Person, color: favoriteColor) {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Magenta'));

export default 0;