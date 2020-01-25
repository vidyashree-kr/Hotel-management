import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography,TextField} from '@material-ui/core';
import GuestDetails from './GuestDetails'

const useStyles = makeStyles({
  card: {
    minWidth: 235,
    margin:'0px 10px 0px 10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    textDecoration: 'line-through'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BookingCard(props) {
  const classes = useStyles();

  return (
      <div align="center">
           <Card  className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         &#8377; {props.actualAmount}
        </Typography>
        <Typography variant="h5" component="h2">
        &#8377; {props.discountedAmount}  per Room / night
        </Typography>
        <div>
  <TextField
    id="date"
    variant="outlined"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
    id="date"
    variant="outlined"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
        </div>
        <div><GuestDetails/></div>
      </CardContent>
      <Button variant="contained" color="primary" style={{marginBottom:'20px'}}>Book Now</Button>
      {/* <CardActions >
        <Button size="small">Book Now</Button>
      </CardActions> */}
    </Card>
      </div>
   
  );
}