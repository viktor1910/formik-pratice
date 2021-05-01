import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Typography, TextField, Checkbox, FormControlLabel, FormControl, InputLabel, Select, Container, Grid, MenuItem } from '@material-ui/core';

const MyTextInput = ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    return <>
        <Typography>{label}</Typography>
        <TextField {...field} {...props} />
        <Typography>{meta.touched && meta.error}</Typography>
    </>
}

const MyCheckbox = ({ children, ...props }: any) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return <>
        <FormControlLabel
            {...field}
            {...props}
            control={<Checkbox name={field.name} />}
        />
        <Typography>{meta.touched && meta.error}</Typography>
    </>
}

const FormikUseField = () => {
    return (
        <Container maxWidth="md">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    acceptedTerms: false,
                    jobType: '',
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                        .oneOf(
                            ['designer', 'development', 'product', 'other'],
                            'Invalid Job Type'
                        )
                        .required('Required'),
                })}
            >
                <Form>
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                    />

                    <MyTextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />
                    <MyCheckbox name="acceptedTerms" label='I accept the terms and conditions' />
                </Form>
            </Formik >
        </Container>
    )
}

export default FormikUseField;