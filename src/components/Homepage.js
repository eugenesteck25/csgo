import React from 'react';
import './ComponentCSS.css';
import csgo from './Images/csgo.png';
import arrowCircle from './Images/arrowCircle.png';
import sorting from './Images/sorting.png';
import Searching from './Images/Searching.png';
import array from './Images/array.png';
import queque from './Images/queque.png';
import stack from './Images/stack.png';

function Homepage() {
  return (
    <div className='landingContainer'>
      <img src={csgo} className="logo" alt="Logo" />

      <h1> Data Structure Visualizer</h1>

      <div className="button-container">
        <a href="/Visualiser">
          <button className="button">
            DSA Simulation
            <img src={arrowCircle} alt="Image" />
          </button>
        </a>

        <button className="button">
          Code Visualizer
          <img src={arrowCircle} alt="Image" />
        </button>
      </div>

      <img src={sorting} className="visDescription" />
      <img src={Searching} className="visDescription" />
      <img src={array} className="visDescription" />
      <img src={queque} className="visDescription" />
      <img src={stack} className="visDescription" />
    </div>
  );
}

export default Homepage;
