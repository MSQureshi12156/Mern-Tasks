import React, {useState}from 'react';
import DisplayVal from './DisplayVal';

export default function Counter () {
    const [count, setcount]= useState(0)

    function increment(){
        console.log("Counter is: ", count)
        setcount(count+1);
    }
    function decrement(){
        console.log("Counter is: ", count)
        setcount(count - 1);
    }

  return (
    <div>
 <button onClick={increment}>Add Count</button>
 <DisplayVal val={count} />
 <button onClick={decrement}>Sub Count</button>
 </div>
  );
}