import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import Header from "./Header";
import {AuthStateType, getAuthUserData} from "../../Redux/auth-reducer";

export const HeaderContainer = () => {

    const auth = useAppSelector<AuthStateType>(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    return <Header isAuth={auth.isAuth} login={auth.login} />
}
