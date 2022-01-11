import React from "react";
import s from './Message.module.css';


export type MessagePropsType = {
    message: string,
    id: number,
}

const Message = ({message, id}: MessagePropsType) => {
    return <div className={s.message}>{message}</div>

}

export default Message;
