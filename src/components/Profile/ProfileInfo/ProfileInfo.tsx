import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";
import { useAppSelector } from "../../../Redux/redux-store";
import { profileSelector } from "../../../Selectors/profileSelector";
import userPhoto from "../../../assets/images/user.svg";
import { Box, LinearProgress } from "@mui/material";

const ProfileInfo = () => {
  const profile = useAppSelector(profileSelector);

  if (!profile) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <div className={s.descriptionBlock}>
      <div>
        <img
          src={profile.photos?.small ?? userPhoto}
          className={s.imgProfile}
        />
      </div>
      <span>
        <ProfileStatus />
      </span>
      <div>About me : {profile.aboutMe}</div>
      <div>My Full Name - {profile.fullName}</div>

      <ul>
        <span>My Contacts : </span>
        <li>facebook: {profile.contacts?.facebook}</li>
        <li>github: {profile.contacts?.github}</li>
        <li>vk: {profile.contacts?.vk}</li>
        <li>twitter: {profile.contacts?.twitter}</li>
        <li>instagram: {profile.contacts?.instagram}</li>
        <li>youtube: {profile.contacts?.youtube}</li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
