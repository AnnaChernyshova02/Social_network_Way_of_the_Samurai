import React from 'react';
import {v1} from "uuid";
import {AchionsType, MyPostsPropsType} from "./store";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';


export const addPostAction = () => ({type: ADD_POST} as const)

export const newPostTextAction = (text: string) => {
    return {
        type: 'NEW-POST-TEXT',
        newText: text
    } as const
}

let initialState: MyPostsPropsType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likeCounts: 15},
        {id: v1(), message: "It's my first post", likeCounts: 20}
    ],
    newTextPosts: 'Hello'
}

const profileReducer = (state = initialState, action: AchionsType) => {
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
export default profileReducer;