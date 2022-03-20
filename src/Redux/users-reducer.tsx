import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export type UserType = {
    id: number,
    photos: {
        small: string
        large: string
    }
    followed: boolean,
    name: string,
    status: string,
    location: {
        city: string
        country: string
    }
}

let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
}

export type initialStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type AchionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>


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
                users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.curretnPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        default:
            return state;
    }
};

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (curretnPage: number) => ({type: SET_CURRENT_PAGE, curretnPage} as const)
export const setTotalUsersCountAC = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const)
