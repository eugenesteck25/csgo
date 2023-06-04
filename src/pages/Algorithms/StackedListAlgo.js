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

  const handlePeek = () => {
    const notice = document.getElementById('notice');
    if (stack.length === 0) {
      notice.textContent = 'Stack is empty.';
      notice.style.display = 'block';
      return;
    }
    notice.style.display = 'none';
    const topItem = stack[stack.length - 1];
    notice.textContent = `Top item: ${topItem}`;
    notice.style.display = 'block';
  };

  const handleClear = () => {
    setStack([]);
  };

  return (
    <div className='stacked-list-algo-body'>
      <h2>Stacked List Visualizer</h2>
      <div >
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
        <button onClick={handlePeek}>Peek</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className='stacked-container' dir='RTL'>
        <div className='stacked-circle Tail'>
          <p>{stack.length > 0 ? "Tail" : "Tail"}</p>
        </div>
        {stack.length > 0 && (
          <div className='stacked-line head-line'></div>
        )}
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

        {/* <div className='stacked-circle head'>
          <p>{stack.length > 0 ? "head" : ""}</p>
        </div> */}

        {stack.length > 0 && (
          <div className='stacked-line head-line'></div>
        )}

        <div className='stacked-circle Head'>
          <p>{stack.length > 0 ? "Head" : "Head"}</p>
        </div>

      </div>
    </div>
  );
};

export default StackedListAlgo;