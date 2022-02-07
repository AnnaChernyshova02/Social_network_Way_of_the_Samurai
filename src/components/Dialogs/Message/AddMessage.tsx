import React, {createRef} from "react";
import {store} from "../../../Redux/State";


const AddMessage = () => {

    let newMessageElement = createRef<HTMLInputElement>();

    let addMessages = () => {
        if (newMessageElement.current) {
            store.addMessage(newMessageElement.current.value)
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
