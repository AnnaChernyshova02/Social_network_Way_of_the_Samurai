import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {setLogin} from "./auth-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";

const initialState: InitialStateType = {
  status: 'idle',
  error: null,
  isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    case 'SET-IS-INITIAL':
      return {...state, isInitialized: action.isInitialized}
    default:
      return {...state}
  }
}

export const initializeApp = () => (dispatch: Dispatch) => {
  authAPI.me().then(res => {
    dispatch(setAppStatus('loading'))
    if (res.data.resultCode === 0) {
      dispatch(setLogin(true));
      dispatch(setAppStatus('succeeded'))
    } else {
      handleServerAppError(res.data, dispatch);
    }
  })
     .catch((error) => {
       handleServerNetworkError(error, dispatch);
     })
     .finally(()=>{
       dispatch(setIsInitialized(true))
     })
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
  status: RequestStatusType
  error: string | null,
  isInitialized: boolean
}

export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setIsInitialized = (isInitialized: boolean) => ({type: 'SET-IS-INITIAL', isInitialized} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppError>
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>
export type setIsInitializeActionType = ReturnType<typeof setIsInitialized>

type ActionsType =
   | SetAppErrorActionType
   | SetAppStatusActionType
   | setIsInitializeActionType

