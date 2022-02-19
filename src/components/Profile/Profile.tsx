import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PropsType} from "../../App";

function Profile({store}: PropsType) {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={store}/>
    </div>
}

export default Profile;