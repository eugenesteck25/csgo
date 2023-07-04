import React from 'react'
import SideBar from '../components/SideBar'
import SelectionSortAlgo from './Algorithms/SelectionSortAlgo'


function SelectionSort() {
    return (

        <div>
            <SideBar />


            <SelectionSortAlgo />
            <div className='CodeView'>

            </div>

            <div className='description'>
                <h1>description </h1>
            </div>



        </div>


    )
}

export default SelectionSort