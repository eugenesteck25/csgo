import React, { useState, useEffect } from 'react';
import './Visualizer.css';

const BinarySearchAlgo = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [result, setResult] = useState(-1);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  const [mid, setMid] = useState(-1); // set initial value to -1

  const generateArray = () => {
    const arr = [];
    for (let i = 1; i <= 11; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    arr.sort((a, b) => a - b);
    setArray(arr);
    setTarget('');
    setResult(-1);
    setLow(-1);
    setHigh(-1);
    setMid(-1);
  };

  const binarySearch = () => {
    let l = 0;
    let h = array.length - 1;

    const searchInterval = setInterval(() => {
      if (l > h) {
        clearInterval(searchInterval);
        setResult(-1);
        setLow(-1);
        setHigh(-1);
        return;
      }

      const m = Math.floor((l + h) / 2);
      setMid(m);

      if (array[m] === parseInt(target)) {
        setResult(m);
        clearInterval(searchInterval);
        setLow(-1);
        setHigh(-1);
        return;
      } else if (array[m] < parseInt(target)) {
        l = m + 1;
      } else {
        h = m - 1;
      }

      setLow(l);
      setHigh(h);
    }, 1000);
  };

  // Add a useEffect hook to reset the search range when the target input changes
  useEffect(() => {
    setLow(-1);
    setHigh(-1);
  }, [target]);

  return (
    <div className='BSA-body'>
      <h1>Binary Search Visualizer</h1>
      <div style={{ marginTop: '10px' }}>
        <input
          type='number'
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder='Search Target'
        />
        <button onClick={binarySearch}>Search</button>
      </div>

      <br />
      <div>
        <button onClick={generateArray}>Generate Array</button>
      </div>

      {result !== -1 ? (
        <div>
          <p>Found target at index {result}.</p>
        </div>
      ) : (
        <div>
          <p>Target not found.</p>
        </div>
      )}

      <div className='BSA-array-container'>
        {array.map((elem, index) => (
          <div
            key={index}
            style={{
              margin: '5px',
              padding: '2px',
            }}
          >
            <div
              className='BSA-array'
              style={{
                backgroundColor:
                  index >= low && index <= high && low !== -1 && high !== -1
                    ? '#FFFF99' // yellow background for search range
                    : index === mid && mid >= 0 // highlight mid only if it has been set by the binarySearch function
                      ? '#32CD32' // green background for middle element
                      : index === result
                        ? '#00FFFF' // cyan background for found element
                        : '#FFFFFF', // white background for other elements
                width: '30px',
                height: '30px'
              }}
            >
              {elem}
            </div>
            <div className='BSA-array-index' style={{ fontSize: '12px' }}>{index}</div> {/* add index below the element */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BinarySearchAlgo;