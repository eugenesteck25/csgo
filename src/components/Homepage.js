import React from 'react'
import './ComponentCSS.css'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='buttonplace'>
      <Link to='/Visualiser'>
        <button className='go-to'>
          Go to Visualiser
        </button>
      </Link>
    </div>
  )
}

export default Homepage