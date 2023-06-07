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
      <div className="logo-container">
        <img src={csgo} alt='csgologo' className='logo' />
      </div>
      <h1> Data Structure Visualizer</h1>

      <div className="button-container">
        <a href="/Visualiser">
          <button className="button">
            DSA Simulation
            <img src={arrowCircle} alt='arrowcircle' />
          </button>
        </a>
        <a href="/Compiler">
          <button className="button" >
            Code Visualizer
            <img src={arrowCircle} alt='arrowcircle' />
          </button>
        </a>
      </div>
      <div className='image-container'>
        <img src={sorting} alt="visDescription" className='visDescription' />
        <img src={Searching} alt="visDescription" className='visDescription' />
        <img src={array} alt="visDescription" className='visDescription' />
        <img src={queque} alt="visDescription" className='visDescription' />
        <img src={stack} alt="visDescription" className='visDescription' />
      </div>
    </div>
  );
}

export default Homepage;
