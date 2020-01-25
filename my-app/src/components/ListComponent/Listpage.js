import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// grid
import Grid from '@material-ui/core/Grid';
// button 
import Button from '@material-ui/core/Button';
import image from "../../assets/images/hotel1.jpeg"
// external css
import './ListPage.css'
// icon
import GradeIcon from '@material-ui/icons/Grade';
import SvgIcon from '@material-ui/core/SvgIcon';
import yellow from '@material-ui/core/colors/purple';

const star = yellow[500]; // #F44336
// card
const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        width: '70%'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },

    // grid
    root: {
        flexGrow: 1,
        '& > svg': {
            margin: theme.spacing(2),
          },
          '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));
// end of card

let Hotel = (props) => {
    console.log(props.hotelData)
   
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            {
                props.hotelData.map((value)=>{
                    console.log(value)
                    let elements = [];
                    for(var i = 0; i < value.rating; i++){
                        // push the component to elements!
                        elements.push(<GradeIcon color={star}/>);
                    }
                    return(
                        <Card className={classes.card}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div className="hotelImg">
                            <img src={image} />
                        </div>
                    </Grid>

                    <Grid item xs={5}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                   Hotel Name: {value.name}
          </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    
                                    Rating: {elements}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                   Adress: {value.address}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                Price: &#8377;{value.room_details[0].price}
          </Typography>
                            </CardContent>
                        </div>
                    </Grid>

                    <Grid item xs={3} className="mybtn">
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" className="myButton" hotelData={value} onClick={()=>{props.detailsPageFlage(true, value)}}>
                                View Details
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className="myButton">
                                Book Now
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Card>
                    )
                })
            }
        </div >
    )
}

export default Hotel;