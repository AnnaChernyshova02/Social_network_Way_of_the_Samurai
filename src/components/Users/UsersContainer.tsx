import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, initialStateType, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import { Dispatch } from "redux";

type mapStatePropsType = {
    usersPage: initialStateType
}

type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = mapDispatchPropsType & mapStatePropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }

}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
