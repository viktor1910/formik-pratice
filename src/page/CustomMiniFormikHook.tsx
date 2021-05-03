import React from 'react';
import useCustomFormik from '../hook/useCustomFormik';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Checkbox, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2, 4)
    }
}))

const CustomMiniFormikHook = () => {
    const classes = useStyles();
    const { value, handleChange } = useCustomFormik({
        initialValue: {
            isGoing: false,
            numberOfGuests: 2
        }
    })
    console.log(value)
    return (
        <Container maxWidth="md" className={classes.container}>
            <Paper className={classes.paper}>
                <form>
                    <Checkbox color="primary" name="isGoing" onChange={handleChange('isGoing')} />
                    <Typography component="h1" variant="h5">Number of guests</Typography>
                    <TextField value={value.numberGuests} onChange={handleChange('numberOfGuests')} fullWidth type="number" name="numberOfGuests" />
                </form>
            </Paper>
        </Container >
    )
}

export default CustomMiniFormikHook
