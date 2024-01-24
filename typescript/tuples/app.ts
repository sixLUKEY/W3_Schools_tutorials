let tuple: [number, boolean, string];

tuple = [5, false, 'Lucas was here'];
tuple = [false, 5, '']; // Incorrectly initialised
tuple.push('yagayo'); // No type safety for things pushed


let readonlyTuple: readonly [number, boolean, string] = [5, true, 'Lucas was here'];
readonlyTuple.push('yagayo'); // Can't push because readonly


//? Named Tuples

const graph: [x: number, y: number] = [55.2, 41.3];

const anotherGraph: [number, number] = [55.2, 41.3];
const [x, y] = anotherGraph;