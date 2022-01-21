import React, {createRef} from "react";
import s from './Message.module.css';
import {MessagePropsType} from "./Message";
import {addMessage} from "../../../Redux/State";


const AddMessage = () => {

    let newMessageElement = createRef<HTMLInputElement>();

    let addMessages = () => {
        let text = newMessageElement.current?.value;
        addMessage(text)
    }

    return <div>
        <input ref={newMessageElement}/>
        <div>
            <button onClick={addMessages}>Add post</button>
        </div>
    </div>
}

export default AddMessage;
