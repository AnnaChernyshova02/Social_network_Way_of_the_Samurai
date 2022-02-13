import React, {createRef} from "react";
import {AchionsType, addMessageAction} from "../../../Redux/State";

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

    return <div>
        <input ref={newMessageElement}/>
        <div>
            <button onClick={addMessages}>Add post</button>
        </div>
    </div>
}

export default AddMessage;
