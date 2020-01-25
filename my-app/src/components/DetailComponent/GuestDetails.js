import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid, NativeSelect, FormControl, InputLabel, InputBase } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function PopoverPopupState() {
    const classes = useStyles();
    const [rooms, setrooms] = React.useState('');
    const [adults, setadults] = React.useState('');
    const [children, setchildren] = React.useState('');
    const handleChange = event => {
        setrooms(event.target.value);
    };
    const handleChange2 = event => {
        setadults(event.target.value)
    };
    const handleChange3 = event => {
        setchildren(event.target.value)
    };
    return (
        <div style={{ marginTop: '20px' }}>
            <PopupState variant="popover" popupId="demo-popup-popover">
                {popupState => (
                    <div>
                        <Button variant="outlined" color="primary" fullWidth
                            style={{ backgroundColor: 'white', color: 'black', border: '1px solid grey' }} {...bindTrigger(popupState)}>
                            Guest / Room Details
          </Button>
                        <Popover
                            fullWidth
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Box p={5}>
                                <Grid xs={12} spacing={1} container>
                                    <Grid xs={4} style={{ marginRight: '30px' }} ><Grid item>Rooms</Grid>
                                        <Grid> <FormControl className={classes.margin}>
                                            <NativeSelect
                                                id="demo-customized-select-native"
                                                value={rooms}
                                                onChange={handleChange}
                                                input={<BootstrapInput />}
                                            >
                                                <option value="" />
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option></NativeSelect>
                                        </FormControl> </Grid></Grid>
                                    <Grid xs={4}><Grid item >Adults</Grid>
                                        <Grid> <FormControl className={classes.margin}>
                                            <NativeSelect
                                                id="demo-customized-select-native"
                                                value={adults}
                                                onChange={handleChange2}
                                                input={<BootstrapInput />}
                                            >
                                                <option value="" />
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option></NativeSelect>
                                        </FormControl>  </Grid></Grid>
                                    <Grid xs={4}><Grid item >Children</Grid>
                                        <Grid> <FormControl className={classes.margin}>
                                            <NativeSelect
                                                id="demo-customized-select-native"
                                                value={children}
                                                onChange={handleChange3}
                                                input={<BootstrapInput />}
                                            >
                                                <option value="" />
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option></NativeSelect>
                                        </FormControl>  </Grid></Grid>
                                </Grid>
                            </Box>
                        </Popover>
                    </div>
                )}
            </PopupState></div>
    );
}
