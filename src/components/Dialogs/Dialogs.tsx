import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Anna" id={1}/>
                <DialogItem name="Dima" id={2}/>
                <DialogItem name="Max" id={3}/>
                <DialogItem name="Oksana" id={4}/>
                <DialogItem name="Natasha" id={5}/>
            </div>
            <div>
            <Message massege="hi"/>
            <Message massege="YO"/>
            <Message massege="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;
