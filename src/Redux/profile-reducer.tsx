import React from 'react';
import {v1} from "uuid";
import {AchionsType, MyPostsPropsType, PostPropsType} from "./store";

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

    let copyState = {
        ...state,
        posts: [...state.posts]
    }

    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: v1(),
                message: state.newTextPosts,
                likeCounts: 0
            }
            copyState.posts.push(newPost);
            copyState.newTextPosts = '';
            return copyState;
        case NEW_POST_TEXT:
            copyState.newTextPosts = action.newText;
            return copyState;
        default:
            return state;
    }
};
export default profileReducer;