const obj = { name: "John", details: { age: 30, city: "New York" } };

// Shallow Copy using Object.assign
const shallowCopy = Object.assign({}, obj);
shallowCopy.details.age = 40; // Changes the original object too
console.log(obj.details.age); // Output: 40

// Deep Copy using structuredClone (modern approach)
const deepCopy = structuredClone(obj);
deepCopy.details.age = 50;
console.log(obj.details.age); // Output: 40
