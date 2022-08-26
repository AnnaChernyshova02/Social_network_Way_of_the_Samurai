import React from "react";
import {addPost, ProfileStateType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";
import {profilePageSelector} from "../../../Selectors/profileSelector";

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: profilePageSelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (message: string) => {
            dispatch(addPost(message))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

type MapStatePropsType = {
    profilePage: ProfileStateType
}

type MapDispatchPropsType = {
    addPost: (message: string) => void
}

export type MyPostsType = MapStatePropsType & MapDispatchPropsType




