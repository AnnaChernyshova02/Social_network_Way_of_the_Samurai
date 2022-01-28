import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, MyPostsPropsType} from "../../Redux/State";

function Profile({posts, newTextPosts, addPost}: MyPostsPropsType) {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts}
                 addPost={addPost}
                 newTextPosts={newTextPosts}
        />
    </div>
}

export default Profile;