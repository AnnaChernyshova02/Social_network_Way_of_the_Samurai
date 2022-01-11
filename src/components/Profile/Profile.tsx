import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

type ProfilePropsType = {
    posts: Array<PostPropsType>
}

function Profile({posts}:ProfilePropsType) {


    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}

export default Profile;