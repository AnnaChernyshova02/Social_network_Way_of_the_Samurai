import {v1} from "uuid";
import {ProfileType} from "../components/Profile/Profile";
import {profileAPI} from "../api/api";
import {ThunkType} from "./redux-store";
import {setAppStatus} from "./app-reducer";
import {handleServerNetworkError} from "../utils/error-utils";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.id)
      }
    default:
      return state;
  }
};

export const addPost = (message: string) => ({type: ADD_POST, message} as const)
export const deletePost = (id: string) => ({type: DELETE_POST, id} as const)

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
  dispatch(setAppStatus('loading'))
  try {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
    dispatch(setAppStatus('succeeded'))
  } catch (error: any) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus('failed'))
  } finally {
    dispatch(setAppStatus('idle'))
  }
}

export const getStatus = (userId: string): ThunkType => async (dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
    dispatch(setAppStatus('succeeded'))
  } catch (error: any) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus('failed'))
  } finally {
    dispatch(setAppStatus('idle'))
  }
}

export const getUpdateStatus = (status: string): ThunkType => async (dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
      dispatch(setAppStatus('succeeded'))
    }
  } catch (error: any) {
    handleServerNetworkError(error, dispatch)
    dispatch(setAppStatus('failed'))
  } finally {
    dispatch(setAppStatus('idle'))
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

export type ProfileActionsType = ReturnType<typeof addPost>
   | ReturnType<typeof setUserProfile>
   | ReturnType<typeof setStatus>
   | ReturnType<typeof deletePost>

export default profileReducer;