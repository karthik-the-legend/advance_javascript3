(function () {
    console.log("IIFE runs immediately!");
  })();
  
  (function (name) {
    console.log(`Hello, ${name}!`);
  })("JavaScript");
  