import React, {useEffect} from "react";
import Profile, {ProfileType} from "./Profile";
import {getStatus, getUserProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";

export const ProfileContainer = () => {

  const profile = useAppSelector<ProfileType>(state => state.profilePage.profile)

  let {userId} = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserProfile(userId ?? '22596'))
    dispatch(getStatus(userId ?? '22596'))
  }, [userId])

  return <Profile profile={profile}/>
}


