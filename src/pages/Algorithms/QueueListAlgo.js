import React, { useState } from 'react';


function QueueListAlgo() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const enqueue = () => {
    if (inputValue !== '') {
      setQueue([...queue, inputValue]);
      setInputValue('');
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      const updatedQueue = [...queue];
      updatedQueue.shift();
      setQueue(updatedQueue);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="queue-visualizer">
      <h1>Queue Visualizer</h1>
      <div className="queue-container">
        <div className="queue">
          {queue.map((item, index) => (
            <div key={index} className="queue-item">
              {item}
            </div>
          ))}
        </div>
        <div className="queue-controls">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a value"
          />
          <button onClick={enqueue}>Enqueue</button>
          <button onClick={dequeue}>Dequeue</button>
        </div>
      </div>
    </div>
  );
}

export default QueueListAlgo;
