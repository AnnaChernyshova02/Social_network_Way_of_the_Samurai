import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    login: string
    isAuth: boolean
}

function Header(props: HeaderType) {

    return <>
        <header className={s.header}>
            <img alt={'Logo'} src='https://webstockreview.net/images/clipart-mountain-mountain-range-1.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    </>
}

export default Header;