import React from 'react';
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

export type initialStateType = {
    posts: Array<PostPropsType>
    newTextPosts: string
}
export type PostPropsType = {
    id: string,
    message: string,
    likeCounts: number
}

type AchionsType = ReturnType<typeof addPostAction> | ReturnType<typeof newPostTextAction>

let initialState: initialStateType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likeCounts: 15},
        {id: v1(), message: "It's my first post", likeCounts: 20}
    ],
    newTextPosts: 'Hello'
}

const profileReducer = (state: initialStateType = initialState, action: AchionsType): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: v1(),
                        message: state.newTextPosts,
                        likeCounts: 0
                    }
                ],
                newTextPosts: ''
            }
        case NEW_POST_TEXT:
            return {
                ...state,
                newTextPosts: action.newText
            }
        default:
            return state;
    }
};


export const addPostAction = () => ({type: ADD_POST} as const)

export const newPostTextAction = (text: string) => {
    return {
        type: 'NEW-POST-TEXT',
        newText: text
    } as const
}


export default profileReducer;