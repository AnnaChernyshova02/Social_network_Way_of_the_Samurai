import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    "aboutMe"?: string | null,
    "contacts"?: ContactsType,
    "lookingForAJob"?: boolean,
    "lookingForAJobDescription"?: string | null,
    "fullName"?: string | null,
    "userId"?: number,
    "photos"?: {
        "small"?: string | undefined,
        "large"?: string | undefined
    }
} | null

type ContactsType = {
    "facebook"?: string | null,
    "website"?: string | null,
    "vk"?: string | null,
    "twitter"?: string | null,
    "instagram"?: string | null,
    "youtube"?: string | null,
    "github"?: string | null,
    "mainLink"?: string | null
}

export type ProfilePagePropsType = {
    profile: ProfileType
}

function Profile(props: ProfilePagePropsType) {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;