import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/redux-store";
import { profileSelector } from "../../../Selectors/profileSelector";
import { useFormik } from "formik";
import s from "../../Login/Login.module.css";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { saveProfile } from "../../../Redux/profile-reducer";

type FormikErrorType = {
  fullName?: string;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  aboutMe?: string;
};

export const ProfileDataForm = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(profileSelector);

  const style = { width: "30ch", marginBottom: "25px", textColor: "black" };

  const formik = useFormik({
    initialValues: {
      fullName: profile?.fullName,
      lookingForAJob: profile?.lookingForAJob,
      lookingForAJobDescription: profile?.lookingForAJobDescription,
      aboutMe: profile?.aboutMe,
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.fullName) {
        errors.fullName = "Required";
      } else if (!/^[A-Z]/i.test(values.fullName)) {
        errors.fullName = "Invalid";
      }

      if (!values.lookingForAJobDescription) {
        errors.lookingForAJobDescription = "Required";
      }

      if (!values.aboutMe) {
        errors.aboutMe = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(saveProfile(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <Box>
        <FormGroup>
          <TextField
            sx={style}
            label="Full name"
            variant="standard"
            {...formik.getFieldProps("fullName")}
          />
          <FormControlLabel
            label={"Looking for a job"}
            control={<Checkbox {...formik.getFieldProps("lookingForAJob")} />}
          />
          <TextField
            sx={style}
            label="My professional skills"
            variant="standard"
            {...formik.getFieldProps("lookingForAJobDescription")}
          />
          <TextField
            sx={style}
            label="About me"
            variant="standard"
            {...formik.getFieldProps("aboutMe")}
          />
          <Button type={"submit"} variant={"contained"} color={"secondary"}>
            Save
          </Button>
        </FormGroup>
      </Box>
    </form>
  );
};
