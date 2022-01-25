import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePropsType} from "../../Redux/State";

function Profile({posts}: ProfilePropsType) {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts} addPost={addPost}/>
    </div>
}

export default Profile;