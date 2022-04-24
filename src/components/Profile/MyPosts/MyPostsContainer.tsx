import React from "react";
import {addPostAction, ProfileStateType, newPostTextAction} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

type MapStatePropsType = {
    profilePage: ProfileStateType
}

type MapDispatchPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}

export type MyPostsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {
        addPost: () => {
            dispatch(addPostAction())
        },

        updateNewPostText: (text: string) => {
            dispatch(newPostTextAction(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;



