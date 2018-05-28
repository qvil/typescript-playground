interface GenericCat<Name, Age> {
  (name: Name, age: Age): string;
}

function cuteCat<Name, Age>(name: string, age: number) {
  return `Hello, I'm cute cat ${name}. ${age} years old.`;
}

export const myCuteCat: GenericCat<string, number> = cuteCat;
