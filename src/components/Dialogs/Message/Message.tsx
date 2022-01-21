import React, {createRef} from "react";
import s from './Message.module.css';
import state from "../../../Redux/State";


export type MessagePropsType = {
    message: string,
    id: string,
}

const Message = ({message, id}: MessagePropsType) => {

    if (state.messagesPage.messages.length % 2) {
        return <div className={s.message1}>{message}</div>
    } else {
        return <div className={s.message2}>{message}</div>
    }
}

export default Message;
