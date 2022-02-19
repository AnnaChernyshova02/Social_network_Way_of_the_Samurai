import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {PropsType} from "../../App";
import AddMessageContainer from "./Message/AddMessageContainer";

const Dialogs = ({store}: PropsType) => {

    let state = store.getState();

    let dialogsElement = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messageElement = state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messageElement}
                <AddMessageContainer store={store}/>
            </div>
        </div>
    )
}

export default Dialogs;
