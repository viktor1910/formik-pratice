import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, TextField, Button, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type ValidateForm = {
    firstname: string,
    lastname: string,
    email: string
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2, 4)
    }
}))

const validate = (values: ValidateForm): ValidateForm => {
    const errors = {} as ValidateForm;
    if (!values.firstname) {
        errors.firstname = 'Required'
    } else if (values.firstname.length > 15) {
        errors.firstname = "Must be 15 charactors or less"
    }

    if (!values.lastname) {
        errors.lastname = 'Required'
    } else if (values.lastname.length > 15) {
        errors.lastname = "Must be 15 charactors or less"
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Must be 15 charactors or less"
    }

    return errors;
}


const FomikPractive = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email: '',
            firstname: '',
            lastname: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        //normal validation,
        // validate,
        //end normail validation

        //validtion with Yup
        validationSchema: Yup.object({
            firstname: Yup.string().max(15, 'Must be 15 charactors or less').required('Required'),
            lastname: Yup.string().max(20, 'Must be 20 charactors or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
        })

    })
    return (
        <Container maxWidth="md" className={classes.container}>
            <Paper className={classes.paper}>
                <form onSubmit={formik.handleSubmit}>
                    {// short hand
                        // {formik.getFieldProps<name input>}
                    }
                    <TextField label="first name"
                        fullWidth
                        id="firstname"
                        {...formik.getFieldProps('firstname')}
                    />
                    {formik.touched.firstname && formik.errors.firstname && <Typography color="primary">{formik.errors.firstname}</Typography>}
                    {// full hand
                        //name = "lastname" 
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur} 
                    }
                    <TextField label="last name" fullWidth
                        id="lastname"
                        {...formik.getFieldProps('lastname')}
                    />
                    {formik.touched.lastname && formik.errors.lastname && <div>{formik.errors.lastname}</div>}
                    <TextField label="email" fullWidth
                        id="email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                    <Button type="submit" variant="outlined">Submit Form</Button>
                </form>
            </Paper>
        </Container >
    )
}

export default FomikPractive
