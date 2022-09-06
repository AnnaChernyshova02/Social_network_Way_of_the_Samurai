import React from "react";
import s from "./ProfileInfo.module.scss";
import { useAppDispatch, useAppSelector } from "../../../Redux/redux-store";
import { profileSelector } from "../../../Selectors/profileSelector";
import { Box, IconButton, LinearProgress } from "@mui/material";
import { savePhoto } from "../../../Redux/profile-reducer";
import { userIDSelector } from "../../../Selectors/appSelector";
import Stack from "@mui/material/Stack";
import PartyModeIcon from "@mui/icons-material/PartyMode";

export const ChangeProfileImage = () => {
  const profile = useAppSelector(profileSelector);
  const userID = useAppSelector(userIDSelector);
  const dispatch = useAppDispatch();

  if (!profile) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  const loadingPhoto = (e: any) => {
    dispatch(savePhoto(e.target.files[0]));
  };

  return (
    <div>
      {userID === profile?.userId && (
        <div className={s.changePhoto}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onChange={loadingPhoto}
            >
              <input hidden accept="image/*" type="file" />
              <PartyModeIcon fontSize="large" />
            </IconButton>
          </Stack>
        </div>
      )}
    </div>
  );
};
