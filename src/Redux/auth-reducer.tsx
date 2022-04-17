import React from 'react';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState: initialStateType = {
    id: 2,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
}

export type initialStateType = {
    id: number,
    email: string,
    login: string
    isAuth: boolean
}

type ActionsType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
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
    type: SET_USER_DATA,
    data: {id, login, email}
} as const)
