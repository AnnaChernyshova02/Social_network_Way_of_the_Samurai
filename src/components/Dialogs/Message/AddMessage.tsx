import React, {RefObject} from "react";
import s from './Message.module.css'

type AddMessagePropsType = {
    newMessageElement: RefObject<HTMLInputElement>
    onClick: ()=> void
}

const AddMessage = ({newMessageElement,onClick}:AddMessagePropsType) => {

    let addMessages = (newMessageElement: string) => {
        addMessages(newMessageElement)
    }

    return <div>
        <input className={s.inputt} placeholder={'Enter your message'} ref={newMessageElement}/>
        <div>
            <button className={s.button} onClick={onClick}>Add post</button>
        </div>
    </div>
}

export default AddMessage;
