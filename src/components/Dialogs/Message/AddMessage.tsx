import React, {createRef} from "react";
import {addMessage} from "../../../Redux/State";


const AddMessage = () => {

    let newMessageElement = createRef<HTMLInputElement>();

    let addMessages = () => {
        if (newMessageElement.current) {
            addMessage(newMessageElement.current.value)
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
