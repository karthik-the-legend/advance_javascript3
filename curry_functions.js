function multiply(a) {
    return function (b) {
      return function (c) {
        return a * b * c;
      };
    };
  }
  
  console.log(multiply(2)(3)(4)); // Output: 24
  
  // Practical Example - Logging with a prefix
  function logger(prefix) {
    return function (message) {
      console.log(`[${prefix}] ${message}`);
    };
  }
  
  const errorLogger = logger("ERROR");
  errorLogger("Something went wrong"); // [ERROR] Something went wrong
  