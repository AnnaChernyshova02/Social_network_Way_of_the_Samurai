import React from 'react';
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const NEW_MESSAGE = "NEW-MESSAGE";

export type DialogItemPropsType = {
    id: string,
    name: string,
    avatar: string,
}

export type MessagePropsType = {
    message: string,
    id: string,
}

export type initialStateType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessage: string
}

type AchionsType = ReturnType<typeof addMessageAction> |
    ReturnType<typeof newMessageAction>


let initialState: initialStateType = {
    dialogs: [
        {
            id: v1(),
            name: 'Ann',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvWUjEhawZyijnjoMfam1uBVZ-2zM6VtOBvfVZKBdPPpNGw_HQad3GAe_kH03AvBPNq4&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Natasha',
            avatar: 'https://i.pinimg.com/originals/14/0d/5d/140d5d5781c7293dbbcb41929df56260.jpg'
        },
        {
            id: v1(),
            name: 'Dima',
            avatar: 'https://картинки-для-срисовки.рф/media/posts_admins/gadkij-ya/gadkij-ya-minon-s-gitaroj.jpg'
        },
        {
            id: v1(),
            name: 'Max',
            avatar: 'https://i.pinimg.com/236x/f7/5e/08/f75e0878d490eb8dea424c62ee0c0cbd.jpg'
        },
        {
            id: v1(),
            name: 'Oksana',
            avatar: 'https://banana.by/uploads/thumbs/255/254986.jpg'
        },
    ],
    messages: [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Yo'},
    ],
    newMessage: ''
}

const dialogsReducer = (state: initialStateType = initialState, action: AchionsType): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages,
                    {
                        id: v1(),
                        message: state.newMessage,
                    }
                ],
                newMessage: ''
            }
        case NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.message
            }
        default:
            return state;
    }
};

export const addMessageAction = () => ({type: ADD_MESSAGE} as const)

export const newMessageAction = (message: string) => {
    return {
        type: "NEW-MESSAGE",
        message: message
    } as const
}

export default dialogsReducer;