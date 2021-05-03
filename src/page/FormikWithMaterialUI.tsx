import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        margin: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(3, 0, 2)

    },
    errors: {
        color: 'red'
    }
}))

const FormikWithMaterialUI = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirm: false,
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Required'),
            lastname: Yup.string().required('Required'),
            email: Yup.string().email('Email not valid').required('Required'),
            password: Yup.string().required('Required'),
            confirm: Yup.boolean().oneOf([true], 'Must be confirm with this term'),
        })
    })
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.root}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant="h5">Sign Up</Typography>
                <form noValidate className={classes.form} onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstname"
                                variant="outlined"
                                fullWidth
                                label="First Name"
                                id="firstname"
                                autoFocus
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.firstname && formik.errors.firstname && <Typography className={classes.errors}>{formik.errors.firstname}</Typography>}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastname"
                                name="lastname"
                                label="Last Name"
                                fullWidth
                                variant="outlined"
                                autoComplete="lname"
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.lastname && formik.errors.lastname && <Typography className={classes.errors}>{formik.errors.lastname}</Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                variant="outlined"
                                autoComplete="email"
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && <Typography className={classes.errors}>{formik.errors.email}</Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                fullWidth
                                variant="outlined"
                                autoComplete="password"
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && <Typography className={classes.errors}>{formik.errors.password}</Typography>}
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="primary" name="confirm" onChange={formik.handleChange} onBlur={formik.handleBlur}/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            {formik.touched.confirm && formik.errors.confirm && <Typography className={classes.errors}>{formik.errors.confirm}</Typography>}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default FormikWithMaterialUI;
