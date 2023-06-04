import React, { useState } from 'react';
import './Visualizer.css';

function QueueListAlgo() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [head, setHead] = useState(null);
  const [tail, setTail] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const enqueue = () => {
    if (inputValue !== '') {
      const newQueue = [...queue, inputValue];
      setQueue(newQueue);
      setHead(head === null ? 0 : head);
      setTail(newQueue.length - 1);
      setInputValue('');
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      updatedQueue.shift();
      setQueue(updatedQueue);
      setHead(head + 1);
      setTail(updatedQueue.length === 0 ? null : tail - 1);
    }
  };

  const clearQueue = () => {
    setQueue([]);
    setHead(null);
    setTail(null);
    setInputValue('');
    setSearchValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="queue-visualizer">
      <h1>Queue Visualizer</h1>
      <div className="queue-controls">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
        />
        <button onClick={enqueue}>Enqueue</button>
        <button onClick={dequeue}>Dequeue</button>
        <button onClick={clearQueue}>Clear</button>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search for a value"
        />
      </div>
      <div className="queue-container">
        <div className="queue-header">
          <div className="queue-header-item">Index</div>
          <div className="queue-header-item">Value</div>
        </div>
        <div className="queue">
          {queue.map((item, index) => (
            <div
              key={index}
              className={`queue-item ${item === searchValue ? 'search-item' : ''
                }`}
            >
              <div className="queue-item-box">
                {index === head && <span className="head-indicator">H </span>}
                {index === tail && <span className="tail-indicator">T </span>}
                {item}
              </div>
              <div className="queue-item-index">{index}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QueueListAlgo;