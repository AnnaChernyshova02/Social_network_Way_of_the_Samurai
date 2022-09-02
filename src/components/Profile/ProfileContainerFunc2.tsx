import React, { useEffect } from "react";
import Profile from "./Profile";
import { getStatus, getUserProfile } from "../../Redux/profile-reducer";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/redux-store";
import { userIDSelector } from "../../Selectors/appSelector";

export const ProfileContainer = () => {
  const userID = useAppSelector(userIDSelector).toString();

  let { userId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserProfile(userId ?? userID));
    dispatch(getStatus(userId ?? userID));
  }, [userId]);

  return <Profile />;
};
