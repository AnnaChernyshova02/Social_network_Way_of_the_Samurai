import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string
        country: string
    }
}

let initialState: initialStateType = {
    users: []
}

export type initialStateType = {
    users: UserType[]
}

type AchionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>


export const usersReducer = (state: initialStateType = initialState, action: AchionsType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userID: string) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
