import React from 'react'
import SideBar from '../components/SideBar'
import StackedListAlgo from './Algorithms/StackedListAlgo'
import './PagesCSS.css';

function StackedList() {
  return (
    <div>
      <SideBar />
      <div className='StackedList'>
        <StackedListAlgo />
      </div>
      <div className='CodeView'>

      </div>
      <div className='description'>
        <h1>description </h1>
      </div>
    </div>

  )
}

export default StackedList