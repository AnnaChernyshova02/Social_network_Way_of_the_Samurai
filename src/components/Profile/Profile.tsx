import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../Redux/State";

type NewPostType = {
    posts: Array<PostPropsType>
    addPost: (newTextPosts: string) => void
    newPostText: (newText: string) => void
    newTextPosts: string
}

function Profile({posts, newTextPosts, addPost, newPostText}: NewPostType) {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts}
                 addPost={addPost}
                 newPostText={newPostText}
                 newTextPosts={newTextPosts}
        />
    </div>
}

export default Profile;