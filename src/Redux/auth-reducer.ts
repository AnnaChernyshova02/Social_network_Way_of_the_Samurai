import {ThunkDispatch} from "redux-thunk";
import {authAPI} from "../api/api";
import {AppActionsType, AppStateType} from "./redux-store";

let initialState: AuthStateType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

export type AuthStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};


export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: 'SET_USER_DATA',
    data: {id, login, email}
} as const)


export const getAuthUserData = () => async (dispatch: ThunkDispatch<AppStateType, unknown, AppActionsType>
) => {
    try {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        }
    } catch (e) {
        console.log(e)
    }
}


export type AuthActionsType = ReturnType<typeof setAuthUserData>