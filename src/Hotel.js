import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
// grid
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// button 
import Button from '@material-ui/core/Button';
import image from "./assets/images/hotel1.jpeg"
// external css
import './Hotel.css';
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

let Hotel = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>

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
                                    Hotel Name: Name of the Hotel
          </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Rating: <GradeIcon color={star}/>
                                             <GradeIcon color={star}/>
                                            <GradeIcon color={star}/>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                   Adress: 45, HIMALAYA ARCED, S C ROAD, GANDHI NAGAR, Karnataka, 560009 Bengaluru India 560009
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                Price: &#8377;1335
          </Typography>
                            </CardContent>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" className="myButton">
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
                                    Hotel Name: Name of the Hotel
          </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Rating: <GradeIcon color={star}/>
                                             <GradeIcon color={star}/>
                                            <GradeIcon color={star}/>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                   Adress: 45, HIMALAYA ARCED, S C ROAD, GANDHI NAGAR, Karnataka, 560009 Bengaluru India 560009
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                Price: &#8377;1335
          </Typography>
                            </CardContent>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" className="myButton">
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
                                    Hotel Name: Name of the Hotel
          </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Rating: <GradeIcon color={star}/>
                                             <GradeIcon color={star}/>
                                            <GradeIcon color={star}/>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                   Adress: 45, HIMALAYA ARCED, S C ROAD, GANDHI NAGAR, Karnataka, 560009 Bengaluru India 560009
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                Price: &#8377;1335
          </Typography>
                            </CardContent>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" className="myButton">
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
                                    Hotel Name: Name of the Hotel
          </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Rating: <GradeIcon color={star}/>
                                             <GradeIcon color={star}/>
                                            <GradeIcon color={star}/>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                   Adress: 45, HIMALAYA ARCED, S C ROAD, GANDHI NAGAR, Karnataka, 560009 Bengaluru India 560009
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
                                Price: &#8377;1335
          </Typography>
                            </CardContent>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" className="myButton">
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

        </div >
    )
}

export default Hotel;