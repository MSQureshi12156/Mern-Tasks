import React, { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default CounterButton;
