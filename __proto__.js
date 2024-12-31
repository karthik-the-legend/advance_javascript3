const parent = {
    greet() {
      console.log(`Hello, I am a parent.`);
    },
    parentProperty: "This is from the parent",
  };
  
  const child = {
    childProperty: "This is from the child",
  };
  
  child.__proto__ = parent; // Setting up inheritance manually
  
  console.log(child.parentProperty); // Output: This is from the parent
  child.greet(); // Output: Hello, I am a parent.
  
  console.log(Object.getPrototypeOf(child) === parent); // Output: true
  