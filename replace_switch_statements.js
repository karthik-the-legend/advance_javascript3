const states = {
    start: () => console.log("Start state"),
    stop: () => console.log("Stop state"),
    pause: () => console.log("Pause state"),
  };
  
  function handleState(state) {
    if (states[state]) states[state]();
    else console.log("Invalid state");
  }
  
  handleState("start"); // Output: Start state
  handleState("pause"); // Output: Pause state
  