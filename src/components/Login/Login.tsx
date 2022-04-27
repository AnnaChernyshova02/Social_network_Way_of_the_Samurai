import React from 'react';
import {useFormik} from "formik";
import s from './Login.module.css'
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import { Navigate } from 'react-router-dom';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be more than 6 characters';
            }
            return errors;
        },
        onSubmit: values => {
            //dispatch(loginTC(values))
            formik.resetForm();
        },
    })

    if(isLoggedIn){
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={s.box}>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <FormGroup>
                    <TextField sx={{width: '30ch'}}
                               label="Email"
                               variant="standard"
                               {...formik.getFieldProps("email")}/>
                    {formik.touched.password && formik.errors.email &&
                        <div style={{color: 'red'}}>{formik.errors.email}</div>}
                    <TextField sx={{width: '30ch'}}
                               type="password"
                               label="Password"
                               variant="standard"
                               {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ?
                        <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                    <FormControlLabel label={'Remember me'}
                                      control={<Checkbox
                                          {...formik.getFieldProps("rememberMe")}/>}/>
                    <Button sx={{width: '30ch'}} type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </form>
        </div>
    );
};
