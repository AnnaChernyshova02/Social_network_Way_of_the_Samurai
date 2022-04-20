import {authAPI} from "../api/api";
import {ThunkType} from "./redux-store";

let initialState: InitialStateType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

export type InitialStateType = {
    id: number,
    email: string,
    login: string
    isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
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



export const getAuthUserData = (): ThunkType => async (dispatch) => {
    try {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        }
    } catch (e:any) {
        console.log(e)
    }
    }


export type AuthActionsType = ReturnType<typeof setAuthUserData>