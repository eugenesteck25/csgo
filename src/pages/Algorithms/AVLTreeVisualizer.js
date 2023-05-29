import React, { useState } from 'react';

const Node = ({ value, left, right }) => (
  <div className="node">
    <span>{value}</span>
    {left && <Node {...left} />}
    {right && <Node {...right} />}
  </div>
);

const AVLTreeVisualizer = () => {
  const [tree, setTree] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInsert = () => {
    const newValue = parseInt(inputValue);
    if (isNaN(newValue)) {
      alert('Please enter a valid number.');
      return;
    }

    const newNode = {
      value: newValue,
      left: null,
      right: null,
    };

    // Insert logic here to maintain AVL tree balance

    setTree(newNode);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleInsert}>Insert</button>

      {tree && <Node {...tree} />}
    </div>
  );
};

export default AVLTreeVisualizer;
