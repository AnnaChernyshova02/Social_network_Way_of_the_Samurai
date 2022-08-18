import {authAPI} from "../api/api";
import {setAuthUserData, setLogin} from "./auth-reducer";
import {handleServerNetworkError} from "../utils/error-utils";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType, AppStateType} from "./redux-store";

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

export const initializeApp = () => async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>) => {
  dispatch(setAppStatus('loading'))
  try {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data
      dispatch(setAuthUserData(id, login, email))
      dispatch(setLogin(true));
      dispatch(setAppStatus('succeeded'))
    }
  } catch (error: any) {
    handleServerNetworkError(error, dispatch);
    dispatch(setAppStatus('failed'))
  } finally {
    dispatch(setIsInitialized(true))
    dispatch(setAppStatus('idle'))
  }
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

export type ActionsType =
   | SetAppErrorActionType
   | SetAppStatusActionType
   | setIsInitializeActionType

