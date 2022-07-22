import {v1} from "uuid";
import {ProfileType} from "../components/Profile/Profile";
import {profileAPI} from "../api/api";
import {ThunkType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState: ProfileStateType = {
  posts: [
    {id: v1(), message: "Hi, how are you?", likeCounts: 15},
    {id: v1(), message: "It's my first post", likeCounts: 20}
  ],
  profile: null,
  status: ""
}

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts,
          {
            id: v1(),
            message: action.message,
            likeCounts: 0
          }
        ]
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
};

export const addPostAction = (message: string) => ({type: ADD_POST, message} as const)

export const setUserProfile = (profile: ProfileType) => {
  return {
    type: SET_USER_PROFILE,
    profile
  } as const
}

export const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    status
  } as const
}

export const getUserProfile = (userId: string): ThunkType => async (dispatch) => {
  try {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
  } catch (e) {
    console.log(e)
  }
}

export const getStatus = (userId: string): ThunkType => async (dispatch) => {
  try {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
  } catch (e) {
    console.log(e)
  }
}

export const getUpdateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  } catch (e) {
    console.log(e)
  }
}

export type ProfileStateType = {
  posts: Array<PostPropsType>
  profile: ProfileType
  status: string
}
export type PostPropsType = {
  id: string,
  message: string,
  likeCounts: number
}

export type ProfileActionsType = ReturnType<typeof addPostAction>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>

export default profileReducer;