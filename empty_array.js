const isArrayEmpty = (arr) => Array.isArray(arr) && arr.length === 0;

console.log(isArrayEmpty([])); // Output: true
console.log(isArrayEmpty([1, 2, 3])); // Output: false
