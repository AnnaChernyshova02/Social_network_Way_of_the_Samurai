import React, {ChangeEvent} from "react";
import s from './Message.module.css'
import {DialogsPropsType} from "../../../Redux/store";

type AddMessagePropsType = {
    dialogsPage: DialogsPropsType
    addMessage: ()=> void
    updateNewMessageText: (message:string)=> void
}

const AddMessage = ({addMessage, updateNewMessageText, dialogsPage}: AddMessagePropsType) => {


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
