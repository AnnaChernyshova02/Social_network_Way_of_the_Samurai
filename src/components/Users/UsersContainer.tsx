import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {useParams} from "react-router-dom";

export class UsersContainer extends Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

type mapStatePropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (curretnPage: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean)=> void
}

export type UsersPropsType = mapDispatchPropsType & mapStatePropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}

export const UserContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)
