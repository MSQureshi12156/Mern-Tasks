import React, {useState}from 'react';

export default function DisplayVal (props) {
    console.log("props", props.val)

  return (
    <div>
 <h1>Count is: {props.val}</h1>
 </div>
  );
}

