import React from 'react';
import {v1} from "uuid";
import {AchionsType, DialogsPropsType, MyPostsPropsType, PostPropsType} from "./State";

const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessageAction = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        message: message
    } as const
}

const DialogsReducer = (state: DialogsPropsType, action: AchionsType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: v1(),
                message: action.message,
            }
            state.messages.push(newMessage)
            return state;
        default:
            return state;
    }
};
export default DialogsReducer;