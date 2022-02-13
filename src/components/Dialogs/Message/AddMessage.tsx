import React, {createRef} from "react";
import {AchionsType} from "../../../Redux/State";
import s from './Message.module.css'
import {addMessageAction} from "../../../Redux/dialogs-reducer";

type AddMessagePropsType = {
    dispatch: (action: AchionsType) => void
}

const AddMessage = ({dispatch}:AddMessagePropsType) => {

    let newMessageElement = createRef<HTMLInputElement>();

    let addMessages = () => {
        if (newMessageElement.current) {
           let message =  newMessageElement.current.value
            dispatch(addMessageAction(message))

        }
    }


    return <div >
        <input className={s.inputt} placeholder={'Enter your message'} ref={newMessageElement}/>
        <div>
            <button className={s.button} onClick={addMessages}>Add post</button>
        </div>
    </div>
}

export default AddMessage;
