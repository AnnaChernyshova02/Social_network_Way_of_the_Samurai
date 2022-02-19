import React, {ChangeEvent} from "react";
import {addPostAction, newPostTextAction} from "../../../Redux/profile-reducer";
import {PropsType} from "../../../App";
import MyPosts from "./MyPosts";


type MyPostsContainerType = PropsType & {

}

function MyPostsContainer({store}: MyPostsContainerType) {

    let state = store.getState()

    let addPost = () => {
        store.dispatch(addPostAction())
    }

    let onPostChange = (text: string) => {
        store.dispatch(newPostTextAction(text))
    }
 return <MyPosts updateNewPostText={onPostChange}
                 posts={state.profilePage.posts}
                 newTextPosts={state.profilePage.newTextPosts}
                 addPost={addPost}/>
}

export default MyPostsContainer;

