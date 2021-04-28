import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, FormControlLabel, Checkbox, Typography, TextField } from '@material-ui/core';
import MiniFormik from './component/MiniFormik';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2, 4)
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <MiniFormik initialValues={{
        isGoing: true,
        numberOfGuests: 2
      }}>
        {({ values }) => <Container maxWidth="md" className={classes.container}>
          <Paper className={classes.paper}>
            <form>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" name="isGoing" checked={values.isGoing} />}
                label="Check box"
              />
              <Typography component="h1" variant="h5">Number of guests</Typography>
              <TextField defaultValue={1} value={values.numberOfGuests} fullWidth type="number" name="numberOfGuests" />
            </form>
          </Paper>
        </Container>}
      </MiniFormik>

    </div >
  );
}

export default App;