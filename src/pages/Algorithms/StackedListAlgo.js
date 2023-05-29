import React, { useState } from 'react';
import "./Visualizer.css";

const StackedListAlgo = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePush = () => {
    const notice = document.getElementById('notice');
    if (inputValue.length === 0) {
      notice.textContent = 'Please enter a number.';
      notice.style.display = 'block';
      return;
    }
    notice.style.display = 'none';
    setStack([...stack, inputValue]);
    setInputValue('');
  };

  const handlePop = () => {
    const notice = document.getElementById('notice');
    if (stack.length === 0) {
      notice.textContent = 'Stack is empty.';
      notice.style.display = 'block';
      return;
    }
    notice.style.display = 'none';
    const updatedStack = [...stack];
    updatedStack.pop();
    setStack(updatedStack);

  };

  return (
    <div>
      <h2>Stacked List Visualizer</h2>
      <div>
        <div className='notice-container'>
          <p id="notice"></p>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
        />

        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>

      </div>
      <div className='stacked-container' dir='RTL'>

        {stack.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className='stacked-circle'
              key={index}
            >
              <p>{item}</p>
            </div>
            {index !== stack.length - 1 && (
              <div className='stacked-line'></div>
            )}
          </React.Fragment>
        ))}


      </div>
    </div>
  );
};

export default StackedListAlgo;
