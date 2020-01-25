import React from 'react'
import FilterPage from '../FilterComponent/FilterPage'
import { hotelData } from '../../data.js'
import ListPage from '../ListComponent/Listpage'
import Header from '../header';
import './LandingPage.css'
import Footer from '../footer'
const LandingPage = () => { 
    return (
        <div>
            <Header/>
            <FilterPage hotelData={hotelData} />
            <ListPage hotelData={hotelData}/>
            {/* <Footer/> */}
        </div>
    )  
}

export default LandingPage