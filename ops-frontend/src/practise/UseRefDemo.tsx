// import React, { useRef } from 'react';

// function UseRefDemo() {
//   // 1. Create the ref (initialized to null)
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     // 3. Access the DOM node via '.current' and focus it
//     inputRef.current.focus();
//     inputRef.current.value = "Hello, useRef!";
//     inputRef.current.style.backgroundColor = "lightblue";
//     inputRef.current.type="radio";
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h3>DOM Access Demo</h3>
//       {/* 2. Attach the ref to the input element */}
//       <input ref={inputRef} type="text" placeholder="Click button to focus me..." />

//       <button onClick={handleClick} style={{ marginLeft: '10px' }}>
//         Focus Input
//       </button>
//     </div>
//   );
// }

// export default UseRefDemo;


//====================================== ClickCounterDemo using useRef =======================

// import React, { useState, useRef } from 'react';

// function UseRefDemo() {
//   const [renderCount, setRenderCount] = useState(0);
//   // This value persists, but changing it won't trigger a re-render
//   const totalClicksRef = useRef(0);

//   const handleSilentClick = () => {
//     totalClicksRef.current += 1;
//     console.log(`Clicks stored in ref (silent): ${totalClicksRef.current}`);
//   };

//   return (
//     <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
//       <h3>Silent Value Demo</h3>
//       <p>Component Render Count: <strong>{renderCount}</strong></p>
      
//       {/* Clicking this increases the ref, but the screen won't update until you trigger a render */}
//       <button onClick={handleSilentClick}>
//         Click Silently (Updates Ref)
//       </button>

//       {/* Clicking this forces a state change, which re-renders the page and shows the updated ref */}
//       <button onClick={() => setRenderCount(renderCount + 1)} style={{ marginLeft: '10px' }}>
//         Force Re-render to see Ref: ({totalClicksRef.current})
//       </button>
//     </div>
//   );
// }

// export default UseRefDemo;




//====================================== stop watch demo using useRef =======================
import React, { useState, useRef } from 'react';

function UseRefDemo() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // This ref stores the interval ID safely across renders without causing re-renders
  const timerRef = useRef(null);

  // let intervalId; //No preservation across renders, will be lost on re-render and cause memory leaks

  const startTimer = () => {
    if (isRunning) return;    
    console.log("Starting timer...");
    
    setIsRunning(true);
    // Store the interval ID directly into the ref's .current property
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10); // State will be updated every 10 milliseconds
    }, 10);
    // intervalId = setInterval(() => {
    //   setTime((prevTime) => prevTime + 10); // State will be updated every 10 milliseconds
    // }, 10);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    // Access the stored interval ID from the ref to clear it
    clearInterval(timerRef.current);
    // clearInterval(intervalId);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    // clearInterval(intervalId);
    setTime(0);
  };

  // Format milliseconds into MM:SS:CC (Minutes:Seconds:Centiseconds)
  const formatTime = (totalMilliseconds) => {
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const centiseconds = Math.floor((totalMilliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'monospace' }}>
      <h2>React Stopwatch</h2>
      <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
        {formatTime(time)} ----- UnFormatted: {time}
      </div>
      <div>
        {/* <button onClick={startTimer} style={buttonStyle}>Starteeeeeee</button> */}

        {!isRunning ? (
          <button onClick={startTimer} style={buttonStyle}>Start</button>
        ) : (
          <button onClick={pauseTimer} style={buttonStyle}>Pause</button>
        )}
        <button onClick={resetTimer} style={{ ...buttonStyle, marginLeft: '10px' }}>Reset</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default UseRefDemo;

/*
Explanation:
Why useRef is mandatory here:

1. Preservation: When the timer runs, setTime updates the screen 100 times a second. 
This forces the function component to re-execute completely.
Because timerRef is a ref, React remembers the original interval ID perfectly across all those hundreds of redraws.
 

2. No Memory Leaks: 
If you don't use a ref to track the interval ID, you lose the reference to the running interval. 
This means clicking "Pause" won't know which interval to clear, 
causing the timer to run forever in the background and crash your application's performance.
*/
