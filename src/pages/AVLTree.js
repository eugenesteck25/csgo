import React from 'react'
import SideBar from '../components/SideBar'
import AVLTreeVisualizer from './Algorithms/AVLTreeVisualizer'

function AVLTree() {
  return (
    <div>
        <SideBar/>
        <div className='AVLTree'>
            <AVLTreeVisualizer/>
        </div>
    </div>
  )
}

export default AVLTree