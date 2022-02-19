import React, {createRef} from "react";
import {addMessageAction} from "../../../Redux/dialogs-reducer";
import {PropsType} from "../../../App";
import AddMessage from "./AddMessage";

const AddMessageContainer = ({store}:PropsType) => {

    let newMessageElement = createRef<HTMLInputElement>();

    let addMessages = () => {
        if (newMessageElement.current) {
           let message =  newMessageElement.current.value
            store.dispatch(addMessageAction(message))
        }
    }


    return <AddMessage newMessageElement={newMessageElement}
                       onClick={addMessages}/>
}

export default AddMessageContainer;
