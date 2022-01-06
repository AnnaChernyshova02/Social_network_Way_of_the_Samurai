import React from "react";
import s from './Message.module.css';


type MessagePropsType = {
    massege: string,
    id: number,
}

const Message = ({massege, id}: MessagePropsType) => {
    return <div className={s.message}>{massege}</div>

}

export default Message;
