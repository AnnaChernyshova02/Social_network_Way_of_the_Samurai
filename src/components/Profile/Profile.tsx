import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AchionsType, PostPropsType} from "../../Redux/State";

export type NewPostType = {
    posts: Array<PostPropsType>
    newTextPosts: string
    dispatch: (action: AchionsType) => void
}

function Profile({posts, newTextPosts, dispatch}: NewPostType) {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts}
                 dispatch={dispatch}

                 newTextPosts={newTextPosts}
        />
    </div>
}

export default Profile;