import React from "react";
import s from "./ProfileInfo.module.scss";
import { ProfileStatus } from "./ProfileStatus";
import { useAppSelector } from "../../../Redux/redux-store";
import {
  profileImageSelector,
  profileSelector,
} from "../../../Selectors/profileSelector";
import userPhoto from "../../../assets/images/user.svg";
import { Box, LinearProgress } from "@mui/material";
import { ChangeProfileImage } from "./ChangeProfileImage";
import { ProfileContacts } from "./ProfileContacts";
import { userIDSelector } from "../../../Selectors/appSelector";
import { ModalUpdateProfile } from "../../Modal/ModalUpdateProfile";

const ProfileInfo = () => {
  const profile = useAppSelector(profileSelector);
  const image = useAppSelector(profileImageSelector);
  const userID = useAppSelector(userIDSelector);

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
        <img src={image ?? userPhoto} className={s.imgProfile} />
        <ChangeProfileImage />
      </div>

      <span>
        Status: <ProfileStatus />
      </span>
      <div>My Full Name - {profile.fullName}</div>
      <div>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</div>
      <div>My professional skills: {profile.lookingForAJobDescription}</div>
      <div>About me : {profile.aboutMe}</div>
      <ProfileContacts />
      {userID === profile?.userId && <ModalUpdateProfile />}
    </div>
  );
};

export default ProfileInfo;
