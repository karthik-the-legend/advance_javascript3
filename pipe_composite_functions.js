const add = (x) => x + 2;
const square = (x) => x * x;

const pipe = (...functions) => (value) => functions.reduce((acc, fn) => fn(acc), value);

const processNumber = pipe(add, square);

console.log(processNumber(3)); // Output: 25
