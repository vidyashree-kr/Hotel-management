import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './FilterPage.css'

const useStyles = makeStyles(theme => ({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const marks = [
  {
    value: 1,
    label: '1 Star',
  },
  {
    value: 2,
    label: '2 Star',
  },
  {
    value: 3,
    label: '3 Star',
  },
  {
    value: 4,
    label: '4 Star',
  },
  {
    value: 5,
    label: '5 Star',
  },
];

const FilterPage = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState([0, 0]);
  const [city, setCity] = useState(null)
  const [checkin, setCheckin] = useState(null)
  const [checkout, setCheckout] = useState(null)
  const [rating, setRating] = useState(0)

  let cityData = props.hotelData.map(hotel => { return hotel.city })
  cityData = cityData.filter((v, i, a) => a.indexOf(v) === i); 
  cityData = cityData.map(hotel => { return { 'label': hotel } } )
  
  const valuetext = (value) => {
    return `${value}°C`;
  }

  const handleChange = event => {
    setCity(event.target.innerText)
  }

  const handleCheckInChange = event => {
    setCheckin(event.target.value)
  }

  const handleCheckOutChange = event => {
    setCheckout(event.target.value)
  }

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleRatingChange = (event, value) => {
    setRating(value)
  }

  return (
    <div className='container'>
      <div className='display-flex'>
        <Autocomplete
          id="combo-box-demo"
          className={classes.option}
          options={cityData}
          getOptionLabel={option => option.label}
          style={{ width: 300 }}
          onChange={handleChange}
          renderInput={params => (
            <TextField
              {...params}
              label="Search City"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <TextField
          id="dateIn"
          label="Choose Checkin"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleCheckInChange}
        />
        <TextField
          id="dateOut"
          label="Choose Checkout"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleCheckOutChange}
        />
        <div className='range'>
          <Typography id="range-slider" gutterBottom>
            Price range
          </Typography>
          <Slider
            min={0}
            max={10000}
            value={value}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </div>
        <div className='range'>
          <Typography id="range-slider" gutterBottom>
            Rating
          </Typography>
          <Slider
            value={rating}
            min={1}
            max={5}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={handleRatingChange}
          />
        </div>
        <Button
          className='search'
          variant="contained"
          color="primary"
          onClick={() => props.handleSearch(city, checkin, checkout, value, rating)}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default FilterPage;
