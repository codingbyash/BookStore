import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);  // Call setCount with the updated value
  };

  const decrement = () => {
    setCount(count - 1);  // Call setCount with the updated value
  };

  const reset = () => {
    setCount(0);  // Reset count to 0
  };

  return (
    <>
      <div>
          <h1>COUNTER</h1>
        <p>{count}</p>
        <button className="add" onClick={increment}>Badha do</button>
        <button className="sub" onClick={decrement}>Ghata do</button>
        <button className="res" onClick={reset}>0 kar do</button>
      </div>
    </>
  );
}

export default Counter;
