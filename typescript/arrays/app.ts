const names: string[] = [];
names.push('Dylan'); // Needs to push data of same type

const alsoNames: readonly string[] = ['Dylan'];
alsoNames.push('Joe'); // Can't push on readonly

const numbers = [1, 2, 3]; // Infered to type: number
numbers.push(4);
numbers.push('5'); // Can't push string into an integer array

let head: number = numbers[0]; // No error

