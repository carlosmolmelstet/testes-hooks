import React, { useState, useEffect } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    const teste = document.getElementById("yy");

  });

  return (
    <div>
      <p id="yy">{count2}</p>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>  
      <div>
        <p>You clicked {count2} times</p>
        <button onClick={() => setCount2(count2 + 1)}>
          +
        </button>
        <button onClick={() => setCount2(count2 - 1)}>
          -
        </button>
      </div>  
    </div>  
  );
}

export default App;
