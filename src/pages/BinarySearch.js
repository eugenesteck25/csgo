import React from 'react'
import SideBar from '../components/SideBar'
import BinarySearchAlgo from './Algorithms/BinarySearchAlgo'
import './PagesCSS.css'

function BinarySearch() {
    return (
        <div>
            <SideBar />
            <div className='BSA-block'>
                <BinarySearchAlgo />
            </div>
            <div className='CodeView'>

            </div>
            <div className='description'>
                <h1>description </h1>
            </div>
        </div>
    )
}

export default BinarySearch