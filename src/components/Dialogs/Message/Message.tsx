import React, {createRef} from "react";
import s from './Message.module.css';
import {MessagePropsType, state} from "../../../Redux/State";

const Message = ({message, id}: MessagePropsType) => {

    if (state.dialogsPage.messages.length % 2) {
        return <div className={s.message1}>{message}</div>
    } else {
        return <div className={s.message2}>{message}</div>
    }
}

export default Message;
