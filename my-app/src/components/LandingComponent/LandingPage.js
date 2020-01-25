import React from 'react'
import FilterPage from '../FilterComponent/FilterPage'
import { hotelData } from '../../data.js'

const LandingPage = () => { 
    return (
        <div>
            <FilterPage hotelData={hotelData} />
        </div>
    )  
}

export default LandingPage