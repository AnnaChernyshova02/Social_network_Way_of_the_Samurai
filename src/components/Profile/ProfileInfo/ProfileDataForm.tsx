import React from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/redux-store";
import {
  contactsSelector,
  profileSelector,
} from "../../../Selectors/profileSelector";
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
  contacts?: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
};

export const ProfileDataForm = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(profileSelector);
  const contacts = useAppSelector(contactsSelector);
  const style = { width: "30ch", marginBottom: "25px", textColor: "black" };

  const formik = useFormik({
    initialValues: {
      userID: profile?.userId,
      fullName: profile?.fullName,
      lookingForAJob: profile?.lookingForAJob,
      lookingForAJobDescription: profile?.lookingForAJobDescription,
      aboutMe: profile?.aboutMe,
      contacts: {
        facebook: contacts.facebook,
        website: contacts.website,
        vk: contacts.vk,
        twitter: contacts.twitter,
        instagram: contacts.instagram,
        youtube: contacts.youtube,
        github: contacts.github,
        mainLink: contacts.mainLink,
      },
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

      if (!values.contacts) {
        errors.contacts = {
          vk: "Required",
          facebook: "Required",
          github: "Required",
          instagram: "Required",
          mainLink: "Required",
          twitter: "Required",
          website: "Required",
          youtube: "Required",
        };
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
          {formik.touched.fullName && formik.errors.fullName && (
            <div style={{ color: "red" }}>{formik.errors.fullName}</div>
          )}
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
          {formik.touched.lookingForAJobDescription &&
            formik.errors.lookingForAJobDescription && (
              <div style={{ color: "red" }}>
                {formik.errors.lookingForAJobDescription}
              </div>
            )}
          <TextField
            sx={style}
            label="About me"
            variant="standard"
            {...formik.getFieldProps("aboutMe")}
          />
          {formik.touched.aboutMe && formik.errors.aboutMe && (
            <div style={{ color: "red" }}>{formik.errors.aboutMe}</div>
          )}
          My contacts:
          {Object.keys(contacts).map((key) => (
            <div key={key}>
              <TextField
                sx={style}
                label={key}
                variant="standard"
                {...formik.getFieldProps(`contacts.${key}`)}
              />
              {formik.touched.contacts && formik.errors.contacts && (
                <div style={{ color: "red" }}>{formik.errors.contacts}</div>
              )}
            </div>
          ))}
          <Button type={"submit"} variant={"contained"} color={"secondary"}>
            Save
          </Button>
        </FormGroup>
      </Box>
    </form>
  );
};
