import React from 'react'
import SideBar from '../components/SideBar'
import BSTVisualizer from './Algorithms/BSTVisualizer'

function BST() {
  return (
    <div>
        <SideBar/>
        <div>
            <BSTVisualizer/>
        </div>
    </div>
  )
}

export default BST