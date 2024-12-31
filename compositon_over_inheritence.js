function canWalk(obj) {
    return {
      walk() {
        console.log(`${obj.name} is walking`);
      },
    };
  }
  
  function canSwim(obj) {
    return {
      swim() {
        console.log(`${obj.name} is swimming`);
      },
    };
  }
  
  function person(name) {
    const personObj = { name };
    return { ...personObj, ...canWalk(personObj), ...canSwim(personObj) };
  }
  
  const john = person("John");
  john.walk(); // Output: John is walking
  john.swim(); // Output: John is swimming
  