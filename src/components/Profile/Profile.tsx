import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/redux-store";
import s from "./ProfileInfo/ProfileInfo.module.scss";
import { isAuthSelector } from "../../Selectors/appSelector";

function Profile() {
  const isAuth = useAppSelector(isAuthSelector);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={s.picturesBlock}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export type ProfilePagePropsType = {
  profile: ProfileType;
};

export type ProfileType = {
  aboutMe?: string | null;
  contacts?: ContactsType;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string | null;
  fullName?: string | null;
  userId?: number;
  photos?: {
    small?: string | undefined;
    large?: string | undefined;
  };
} | null;

export type ProfileDiscriptionType = {
  aboutMe: string | null;
  contacts?: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
} | null;

export type ContactsType =
  | {
      facebook: string | null;
      website: string | null;
      vk: string | null;
      twitter: string | null;
      instagram: string | null;
      youtube: string | null;
      github: string | null;
      mainLink: string | null;
    }
  | any;

export default Profile;
