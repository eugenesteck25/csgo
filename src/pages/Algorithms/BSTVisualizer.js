import React, { useState } from 'react';

// Define the TreeNode component
const TreeNode = ({ value, left, right }) => (
  <div className="node">
    <span>{value}</span>
    {left && <TreeNode {...left} />}
    {right && <TreeNode {...right} />}
  </div>
);

// Define the BST component
const BST = ({ root }) => (
  <div className="bst">
    {root && <TreeNode {...root} />}
  </div>
);

// Define the AlgorithmVisualizer component
const BSTVisualizer = () => {
  const [tree, setTree] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [traversalResult, setTraversalResult] = useState('');

  // Handle user input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = inputValue.trim().split(' ').map(Number);
    const newTree = buildBST(values);
    setTree(newTree);
    setTraversalResult('');
    inOrderTraversal(newTree);
  };

  // Build a binary search tree from an array of values
  const buildBST = (values) => {
    if (values.length === 0) {
      return null;
    }

    const rootValue = values[0];
    const leftValues = values.filter((value) => value < rootValue);
    const rightValues = values.filter((value) => value > rootValue);

    const left = buildBST(leftValues);
    const right = buildBST(rightValues);

    return { value: rootValue, left, right };
  };

  // Perform in-order traversal of the binary search tree
  const inOrderTraversal = (node) => {
    if (node) {
      inOrderTraversal(node.left);
      setTraversalResult((prevResult) => prevResult + node.value + ' ');
      inOrderTraversal(node.right);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter space-separated values:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Build BST</button>
      </form>
      <BST root={tree} />
      {tree && (
        <div>
          <h2>In-Order Traversal Result:</h2>
          <p>{traversalResult}</p>
        </div>
      )}
    </div>
  );
};

export default BSTVisualizer;
