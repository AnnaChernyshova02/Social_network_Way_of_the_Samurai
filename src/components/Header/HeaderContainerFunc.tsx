import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import Header from "./Header";
import {AuthStateType} from "../../Redux/auth-reducer";
import {initializeApp} from "../../Redux/app-reducer";

export const HeaderContainer = () => {

    const auth = useAppSelector<AuthStateType>(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return <Header isAuth={auth.isAuth} login={auth.login} />
}
