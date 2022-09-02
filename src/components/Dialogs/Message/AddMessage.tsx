import React from "react";
import s from "./Message.module.css";
import { DialogsType } from "./AddMessageContainer";
import { useFormik } from "formik";
import { Button, FormGroup, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type FormikErrorType = {
  newMessage?: string;
};

const AddMessage = ({ addMessage }: DialogsType) => {
  const formik = useFormik({
    initialValues: {
      newMessage: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.newMessage) {
        errors.newMessage = "Field is required";
      } else if (values.newMessage.length > 600) {
        errors.newMessage = "Maximum value 600 characters";
      }
      return errors;
    },
    onSubmit: (values) => {
      addMessage(values.newMessage);
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <TextField
            sx={{ width: "30ch", marginBottom: "5px" }}
            size="small"
            variant="outlined"
            label={"Enter your message"}
            {...formik.getFieldProps("newMessage")}
          />
          {formik.touched.newMessage ? (
            <div style={{ color: "red" }}>{formik.errors.newMessage}</div>
          ) : null}
          <Button
            sx={{ width: "100px", height: "40px" }}
            type={"submit"}
            size="medium"
            variant="contained"
            color="secondary"
            endIcon={<SendIcon />}
            className={s.button}
          >
            Send
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default AddMessage;
