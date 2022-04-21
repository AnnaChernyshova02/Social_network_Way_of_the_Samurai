import React, {useEffect} from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {store} from "../../Redux/redux-store";
import {useDispatch} from "react-redux";

export const ProfileContainer = () => {

    let state = store.getState()
    let {userId} = useParams()
    const dispatch = useDispatch()

    useEffect(()  => {
            dispatch(getUserProfile(userId ?? '12'))
    }, [userId])

    return <Profile profile={state.profilePage.profile}/>
}


