import React, { useState } from 'react';

const DisplayColor = () => {
  const [selectColor, setColor] = useState('');

  const colorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h2>Select a color:</h2>
      <select onChange={colorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      {selectColor && <p>You selected: {selectColor}</p>}
    </div>
  );
};

export default DisplayColor;
