import React, {Component} from "react";
import {connect} from "react-redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";

export class UsersContainer extends Component<UsersPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            usersPage={this.props.usersPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
        />

    }
}

type mapStatePropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (curretnPage: number) => void
    setTotalUsersCount: (count: number) => void
}

export type UsersPropsType = mapDispatchPropsType & mapStatePropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
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
        },
        setCurrentPage: (curretnPage: number) => {
            dispatch(setCurrentPageAC(curretnPage))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }

}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
