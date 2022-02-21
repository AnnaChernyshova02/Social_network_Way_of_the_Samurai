import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {NavbarType} from "../../Redux/store";

export type NavType = {
    navbar: NavbarType[]
}

const Navbar = ({navbar}: NavType) => {

    let navbarElement = navbar.map(n => <NavLink key={n.id} to={"/dialogs/" + n.id} className={s.friend}>
                                            <img src={n.avatar} alt={'avatar'}/>{n.name}</NavLink>);



    return <nav className={s.nav}>

        <div className={`${s.item} ${s.activeLink}`}>
            <NavLink to={'/profile'} className={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/dialogs'}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/news'}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/music'}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/settings'}>Settings</NavLink>
        </div>

        <div className={s.friends}>
            My Friends
         {navbarElement}
        </div>

    </nav>
}

export default Navbar;