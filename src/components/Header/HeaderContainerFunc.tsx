import React, {useEffect} from "react";
import {store} from "../../Redux/redux-store";
import Header from "./Header";
import {useDispatch} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";

export const HeaderContainer = () => {

    let state = store.getState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData()as any)
    }, [])

    return <Header isAuth={state.auth.isAuth} login={state.auth.login} />
}
