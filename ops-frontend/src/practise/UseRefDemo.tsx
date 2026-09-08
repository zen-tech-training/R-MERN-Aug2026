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

import React, { useState, useRef } from 'react';

function UseRefDemo() {
  const [renderCount, setRenderCount] = useState(0);
  // This value persists, but changing it won't trigger a re-render
  const totalClicksRef = useRef(0);

  const handleSilentClick = () => {
    totalClicksRef.current += 1;
    console.log(`Clicks stored in ref (silent): ${totalClicksRef.current}`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h3>Silent Value Demo</h3>
      <p>Component Render Count: <strong>{renderCount}</strong></p>
      
      {/* Clicking this increases the ref, but the screen won't update until you trigger a render */}
      <button onClick={handleSilentClick}>
        Click Silently (Updates Ref)
      </button>

      {/* Clicking this forces a state change, which re-renders the page and shows the updated ref */}
      <button onClick={() => setRenderCount(renderCount + 1)} style={{ marginLeft: '10px' }}>
        Force Re-render to see Ref: ({totalClicksRef.current})
      </button>
    </div>
  );
}

export default UseRefDemo;

