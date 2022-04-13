import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {store} from "../../Redux/redux-store";
import {useDispatch} from "react-redux";


export const ProfileContainer = () => {

    let state = store.getState()

    let {userId} = useParams()
    const dispatch = useDispatch()

    if(!userId){
        userId = '2'
    }

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }, [userId])
    return <Profile profile={state.profilePage.profile}/>
}


