import React from "react";
import {addPostAction, newPostTextAction} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AchionsType, MyPostsPropsType, RootStateType} from "../../../Redux/store";

type MapStatePropsType = {
    profilePage: MyPostsPropsType
}

type mapDispatchPropsType = {
    addPost: () => void,
    updateNewPostText: (text: string) => void
}


const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: (action: AchionsType) => void): mapDispatchPropsType => {

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



