function outerFunction(outerVariable) {
    console.log("Outer function executed");
  
    return function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}, Inner Variable: ${innerVariable}`);
    };
  }
  
  const closureExample = outerFunction("Closure Example");
  closureExample("Demonstration"); // Outer Variable: Closure Example, Inner Variable: Demonstration
  
  // Closure in practice - Counter Example
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(`Current count: ${count}`);
    };
  }
  
  const counter = createCounter();
  counter(); // Current count: 1
  counter(); // Current count: 2
  