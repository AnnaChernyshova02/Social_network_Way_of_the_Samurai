import React from "react";
import { useFormik } from "formik";
import s from "./Login.module.css";
import { useAppDispatch, useAppSelector } from "../../Redux/redux-store";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import { getCaptchaUrl, login } from "../../Redux/auth-reducer";
import {
  captchaUrlSelector,
  isAuthSelector,
} from "../../Selectors/appSelector";

type FormikErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
  captcha?: string;
};

export const Login = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(isAuthSelector);
  const captchaUrl = useAppSelector((state) => state.auth.captchaUrl);

  const style = { width: "30ch", marginBottom: "25px", textColor: "black" };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 characters";
      }

      return errors;
    },
    onSubmit: (values) => {
      dispatch(login(values));
      formik.resetForm();
    },
  });

  if (isLoggedIn) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <Box
          sx={{
            padding: "50px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            p: 10,
            borderRadius: "20px",
            boxShadow: "20",
          }}
        >
          <div
            style={{
              fontFamily: "Brush Script MT, Brush Script Std, cursive",
              fontSize: "26px",
              textAlign: "center",
              fontWeight: "700",
              marginBottom: "45px",
            }}
          >
            Social Network
          </div>
          <FormGroup>
            <TextField
              sx={style}
              label="Email"
              variant="standard"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.password && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
            <TextField
              sx={style}
              type="password"
              label="Password"
              variant="standard"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <FormControlLabel
              sx={style}
              label={"Remember me"}
              control={<Checkbox {...formik.getFieldProps("rememberMe")} />}
            />
            {captchaUrl && <img src={captchaUrl} />}

            {captchaUrl && (
              <TextField
                sx={style}
                label="Symbols from image"
                variant="standard"
                {...formik.getFieldProps("captcha")}
              />
            )}

            <Button
              sx={{ width: "33ch", marginBottom: "25px" }}
              type={"submit"}
              variant={"contained"}
              color={"primary"}
            >
              Login
            </Button>
          </FormGroup>
        </Box>
      </form>
    </div>
  );
};
