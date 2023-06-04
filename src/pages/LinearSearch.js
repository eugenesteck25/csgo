import React from 'react'
import SideBar from '../components/SideBar'
import LinearSearchAlgo from './Algorithms/LinearSearchAlgo'
import './PagesCSS.css'

function LinearSearch() {
    return (
        <div>
            <SideBar />
            <div className='LSA-block'>
                <LinearSearchAlgo />
            </div>
            <div className='CodeView'>

            </div>
            <div className='description'>
                <h1>description </h1>
            </div>
        </div>
    )
}

export default LinearSearch