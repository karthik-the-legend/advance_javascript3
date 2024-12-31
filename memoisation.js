function memoize(fn) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache[key]) return cache[key];
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  const expensiveCalculation = memoize((num) => {
    console.log("Calculating...");
    return num * 2;
  });
  
  console.log(expensiveCalculation(5)); // Output: Calculating... 10
  console.log(expensiveCalculation(5)); // Output: 10 (cached)
  