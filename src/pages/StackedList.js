import React from 'react'
import SideBar from '../components/SideBar'
import StackedListAlgo from './Algorithms/StackedListAlgo'
import './PagesCSS.css';

function StackedList() {
  return (
    <div>
        <SideBar/>
        <div className='StackedList'>
            <StackedListAlgo/>
        </div>
    </div>
  )
}

export default StackedList