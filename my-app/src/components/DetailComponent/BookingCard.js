import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography,TextField} from '@material-ui/core';
import GuestDetails from './GuestDetails'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  card: {
    minWidth: 235,
    margin:'0px 20px 0px 20px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    textDecoration: 'line-through',marginBottom:'10px'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BookingCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
      <div align="center">
           <Card  className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         &#8377; {props.actualAmount}
        </Typography>
        <Typography style={{marginBottom:'20px'}} variant="h5" component="h2">
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
      <Button variant="contained"  color="primary" 
      style={{marginBottom:'20px',backgroundColor:'orange',borderRadius:'unset',width:'60%',height:'40%'}}
      onClick={handleClickOpen}>
        Book Now</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">Booking Status</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{color:'green'}}>
           Succesfully booked the hotel.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Card>
      </div>
   
  );
}