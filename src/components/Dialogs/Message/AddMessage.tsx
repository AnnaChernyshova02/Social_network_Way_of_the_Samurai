import React, {ChangeEvent} from "react";
import s from './Message.module.css'
import {DialogsType} from "./AddMessageContainer";

const AddMessage = ({addMessage, updateNewMessageText, dialogsPage}: DialogsType) => {

    let addMessages = () => {
        addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        updateNewMessageText(message)
    }

    return <div>
        <textarea className={s.inputt}
                  placeholder={'Enter your message'}
                  onChange={onMessageChange}
                  value={dialogsPage.newMessage}/>
        <div>
            <button className={s.button} onClick={addMessages}>Send</button>
        </div>
    </div>
}

export default AddMessage;
