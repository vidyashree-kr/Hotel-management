import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.jpg'
import photo6 from '../../assets/photo6.jpg'
import photo7 from '../../assets/photo7.jpg'
import photo8 from '../../assets/photo8.jpg'
import BookingCard from './BookingCard'
import Map from './../../master/Map';

class Detailpage extends Component {
    constructor(props) {
        super(props)
        console.log(props.detailsData)
        this.state = {
            hotelName: 'Himalaya',
            location: 'Bangalore',
            adress: '45, HIMALAYA ARCED, S C ROAD, GANDHI NAGAR, Karnataka, 560009 Bengaluru India 560009',
            actualAmount:'1980',
            discountedAmount:'1400'
        }
    }
    render() {
        const { location, hotelName, adress,actualAmount,discountedAmount } = this.state
        
        const {detailsData}=this.props
        return (
            <Grid container style={{ padding: '90px 0px 2px 10px' }} xs={12} align="left" direction="column" spacing="none">
                <Grid item ><Typography style={{ color: 'grey', fontSize: '18px' }}>Hotel</Typography></Grid>
                <Grid item style={{ fontSize: '30px' }} ><b> {detailsData.name} , {detailsData.city}</b></Grid>
                <Grid item><Typography style={{ color: 'grey', fontSize: '20px' }}>{detailsData.address}</Typography>
                </Grid>
                <Grid><a style={{ color: 'blue', cursor: 'pointer' }}></a><Map /></Grid>
                <Grid container xs={12} style={{marginTop:'25px'}}>
                    <Grid container style={{marginBottom:'10px'}} xs={7}>
                      <Grid  align="left" style={{marginBottom:'10px'}} xs={6}>Hotelier Photos</Grid>
                      <Grid align="right" style={{marginBottom:'10px'}} xs={6}>7 Photos</Grid>
                      <Grid item style={{marginBottom:'25px'}}><img width="193px" height="200px" style={{marginRight:'2px'}} src={photo7}></img>
                      <img width="193px" height="200px" style={{marginRight:'2px'}} src={photo1}></img>
                      <img width="193px" height="200px" style={{marginRight:'2px'}} src={photo2}></img>
                      <img width="193px" height="200px" style={{marginRight:'2px'}} src={photo3}></img>
                      </Grid>

                      <Grid  align="left" style={{marginBottom:'10px'}}  xs={6}>Travellers Photos</Grid>
                      <Grid align="right" style={{marginBottom:'10px'}}  xs={6}>5 Photos</Grid>
                      <Grid style={{marginBottom:'25px'}} item><img width="193px" height="200px" style={{marginRight:'2px'}} src={photo8}></img>
                      <img width="193px" height="200px" style={{marginRight:'2px'}} src={photo4}></img>
                      <img width="193px" height="200px" style={{marginRight:'2px'}} src={photo5}></img>
                      <img width="193px" height="200px" style={{marginRight:'2px'}} src={photo6}></img>
                      </Grid>
                      
                        </Grid>
                        
                    <Grid  xs={5} style={{marginLeft:'0px'}}>
                      <BookingCard
                      actualAmount={actualAmount}
                      discountedAmount={detailsData.room_details[0].price}/></Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Detailpage;