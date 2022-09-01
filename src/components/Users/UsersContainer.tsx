import React, {Component} from "react";
import {connect} from "react-redux";
import {
  follow, following, getUsers,
  initialStateType,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleIsFetching, toggleIsFollowingProgress,
  unfollow, unfollowing,
  UserType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hok/AuthRedirect";
import {
  currentPageSelector,
  followingInProgressSelector,
  isFetchingSelector, pageSizeSelector,
  totalUsersCountSelector, usersSelector
} from "../../Selectors/usersSelector";
import {Box, LinearProgress} from "@mui/material";

export class UsersContainer extends Component<UsersPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Box sx={{width: '100%'}}>
        <LinearProgress/>
      </Box> : null}
      <Users
        usersPage={this.props.usersPage}
        onPageChanged={this.onPageChanged}
      />
    </>
  }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    usersPage: usersSelector(state),
    pageSize: pageSizeSelector(state),
    totalUsersCount: totalUsersCountSelector(state),
    currentPage: currentPageSelector(state),
    isFetching: isFetchingSelector(state),
    followingInProgress: followingInProgressSelector(state)
  }
}

export default compose<React.ComponentType>(withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsers, following, unfollowing
  }))(UsersContainer)

type mapStatePropsType = {
  usersPage: initialStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

type mapDispatchPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (count: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowingProgress: (id: number, isFetching: boolean) => void
  getUsers: (currentPage: number, pageSize: number) => void
  following: (id: number) => void
  unfollowing: (id: number) => void
}

export type UsersPropsType = mapDispatchPropsType & mapStatePropsType