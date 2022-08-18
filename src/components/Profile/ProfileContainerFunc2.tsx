import React, {useEffect} from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {profileSelector} from "../../Selectors/profileSelector";

export const ProfileContainer = () => {

  const profile = useAppSelector(profileSelector)

  let {userId} = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserProfile(userId ?? '22596'))
    dispatch(getStatus(userId ?? '22596'))
  }, [userId])

  return <Profile />
}


