import React from 'react';
import {v1} from "uuid";
import {AchionsType, MyPostsPropsType, PostPropsType} from "./State";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';


export const addPostAction = () => ({type: ADD_POST} as const)

export const newPostTextAction = (text: string) => {
    return {
        type: 'NEW-POST-TEXT',
        newText: text
    } as const
}

const ProfileReducer = (state: MyPostsPropsType, action: AchionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostPropsType = {
                id: v1(),
                message: state.newTextPosts,
                likeCounts: 0
            }
            state.posts.push(newPost);
            state.newTextPosts = '';
            return state;
        case NEW_POST_TEXT:
            state.newTextPosts = action.newText;
            return state;
        default:
            return state;
    }
};
export default ProfileReducer;