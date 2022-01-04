import React from "react";
import s from '../Dialogs.module.css';


type MessagePropsType = {
    massege: string,
}

const Message = ({massege}:MessagePropsType) => {
    return <div className={s.message}>{massege}</div>

}

export default Message;
