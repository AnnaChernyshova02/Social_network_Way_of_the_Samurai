import {v1} from "uuid";
import {ProfileType} from "../components/Profile/Profile";
import {usersAPI} from "../api/api";
import {ThunkType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type initialStateType = {
    posts: Array<PostPropsType>
    newTextPosts: string
    profile: ProfileType
}
export type PostPropsType = {
    id: string,
    message: string,
    likeCounts: number
}

export type ProfileActionsType = ReturnType<typeof addPostAction> | ReturnType<typeof newPostTextAction>
    | ReturnType<typeof setUserProfile>

let initialState: initialStateType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likeCounts: 15},
        {id: v1(), message: "It's my first post", likeCounts: 20}
    ],
    newTextPosts: 'Hello',
    profile: null
}

const profileReducer = (state: initialStateType = initialState, action: ProfileActionsType): initialStateType => {
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
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
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

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}

export const getUserProfile = (userId: string): ThunkType => async (dispatch) => {
    try {
        if (!userId) {
            userId = '12'
        }
        const response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    } catch (e) {
        console.log(e)
    }

}

export default profileReducer;