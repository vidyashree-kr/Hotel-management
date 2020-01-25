import React, { useState } from 'react'
import FilterPage from '../FilterComponent/FilterPage'
import { hotelData } from '../../data.js'
import ListPage from '../ListComponent/Listpage'
import Header from '../header';
import './LandingPage.css'
import Footer from '../footer'
import DetailsPage from '../DetailComponent/Detailpage'

const LandingPage = () => { 
    const [hotelsData, setHotelsData] = useState(hotelData)
    const [flag, setFlag] = useState(null)
    const [detailsData, setDetailsData] = useState(null)

    const handleSearch = (city, checkin, checkout, value, rating) => {
        let hotels = hotelData
        if(city) {
            hotels = hotels.filter(hotel => { return hotel.city === city })
        }
        if(rating) {
            hotels = hotels.filter(hotel => { return hotel.rating === rating })
        }
        if(checkin) {
           //to be done
        }
        if(checkout) {
           //to be done
        }
        if(value && value[0] !== 0 && value[1] !== 0) {
            let data = []
            hotels.forEach(hotel => {
                hotel.room_details.forEach(room => {
                    if(value[0] < room.price && value[1] > room.price) {
                        data.push(hotel)
                    }
                }) 
            })
            hotels = data
        }
        setHotelsData(hotels)
    }

    const detailsPageFlage = (check, data) => {
        setFlag(check)
        setDetailsData(data)
    }

    return (
        <div>
            <Header/>
            {!flag && 
                <div>
                <FilterPage
                    hotelData={hotelData}
                    handleSearch={handleSearch}
                />
                <ListPage
                    hotelData={hotelsData}
                    detailsPageFlage={detailsPageFlage}
                />
                </div>
            }
            {flag && <DetailsPage detailsData={detailsData} />}
        </div>
    )  
}

export default LandingPage