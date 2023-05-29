import React from 'react'
import SideBar from '../components/SideBar'
import SortingVisualization from './Algorithms/SortingVisualization'


function Sorting() {
    return (

        <div>
            <SideBar />


            <SortingVisualization />
            <div className='CodeView'>

            </div>

            <div className='description'>
                <h1>description </h1>
            </div>



        </div>


    )
}

export default Sorting