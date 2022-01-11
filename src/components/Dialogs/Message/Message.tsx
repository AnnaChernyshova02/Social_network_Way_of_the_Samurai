import React from "react";
import s from './Message.module.css';


export type MessagePropsType = {
    message: string,
    id: number,
}

const Message = ({message, id}: MessagePropsType) => {

    if (id%2) {
        return <div className={s.message1}>{message}</div>
    } else {
       return <div className={s.message2}>{message}</div>
    }



}

export default Message;
