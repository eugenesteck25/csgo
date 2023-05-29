import React from 'react'
import SideBar from '../components/SideBar'
import QueueListAlgo from './Algorithms/QueueListAlgo'

function QueueList() {
  return (
    <div>
        <SideBar/>
        <div>
            <QueueListAlgo/>
        </div>
        <div className='CodeView'>
              
        </div>
        <div className='description'>
            <h1>description </h1>
        </div>
    </div>
  )
}

export default QueueList