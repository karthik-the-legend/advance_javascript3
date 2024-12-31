function debounce(func, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  }
  
  const search = debounce((query) => {
    console.log(`Searching for: ${query}`);
  }, 500);
  
  search("JavaScript"); // Executes after 500ms
  