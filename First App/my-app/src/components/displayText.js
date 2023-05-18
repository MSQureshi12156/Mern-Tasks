import React, { useState } from 'react';

const ShowText = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const ButtonClick = () => {
    setDisplayedValue(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={InputChange} />
      {displayedValue && <p>Displayed Value: {displayedValue}</p>}
      <button onClick={ButtonClick}>Display Value</button>
      
    </div>
  );
};

export default ShowText;
