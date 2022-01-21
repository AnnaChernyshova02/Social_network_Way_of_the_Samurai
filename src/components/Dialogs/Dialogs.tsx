import React from "react";
import s from './Dialogs.module.css';
import Message, {MessagePropsType} from "./Message/Message";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import AddMessage from "./Message/AddMessage";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

const Dialogs = ({dialogs, messages}:DialogsPropsType) => {

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messageElement = messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messageElement}
                <AddMessage/>
            </div>
        </div>
    )
}

export default Dialogs;
