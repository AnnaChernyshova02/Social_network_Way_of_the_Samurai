import React, {ChangeEvent} from "react";
import s from './Message.module.css'
import {DialogsType} from "./AddMessageContainer";
import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";

const AddMessage = ({addMessage, updateNewMessageText, dialogsPage}: DialogsType) => {


    const formik = useFormik({
        initialValues: {
            newMessage: ""
        },
        onSubmit: values => {
            //dispatch(loginTC(values))
            formik.resetForm();
        },
    })


    let addMessages = () => {
        addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        updateNewMessageText(message)
    }

    return <div>
        <form onSubmit={formik.handleSubmit}>
            <TextField variant="outlined"
                       label={'Enter your message'}
                       onChange={onMessageChange}
                       value={dialogsPage.newMessage}/>
            <div>
                <Button size="medium"
                        variant="contained"
                        color="secondary"
                        sx={{marginTop: 2}}
                        className={s.button}
                        onClick={addMessages}>Send</Button>
            </div>
        </form>
    </div>
}

export default AddMessage;
