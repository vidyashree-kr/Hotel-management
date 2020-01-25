import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const FilterPage = (props) => {
  const classes = useStyles();
  let city = props.hotelData.map(hotel => { return hotel.city })
  let cityData = city.filter((v, i, a) => a.indexOf(v) === i); 
  cityData = cityData.map(hotel => { return { 'label': hotel } } )

  const handleChange = event => {
    console.log(event.target.innerText)
  }

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        className={classes}
        options={cityData}
        getOptionLabel={option => option.label}
        style={{ width: 300 }}
        onChange={handleChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Combo box"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default FilterPage;
