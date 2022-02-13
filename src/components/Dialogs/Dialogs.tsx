import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessage from "./Message/AddMessage";
import {AchionsType, DialogItemPropsType, MessagePropsType} from "../../Redux/State";

type DialogsNewPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    dispatch: (action: AchionsType) => void
}

const Dialogs = ({dialogs, messages, dispatch}: DialogsNewPropsType) => {

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messageElement = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messageElement}
                <AddMessage dispatch={dispatch}/>
            </div>
        </div>
    )
}

export default Dialogs;
