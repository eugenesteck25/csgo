import React from 'react'
import SideBar from '../components/SideBar'
import AVLTreeVisualizer from './Algorithms/AVLTreeVisualizer'

function AVLTree() {
  return (
    <div>
      <SideBar />
      <div className='AVLTree'>
        <AVLTreeVisualizer />
      </div>
      <div className='CodeView'>

      </div>
      <div className='description'>
        <h1>description </h1>
      </div>
    </div>
  )
}

export default AVLTree