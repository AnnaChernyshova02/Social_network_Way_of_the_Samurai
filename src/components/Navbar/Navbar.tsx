import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {store} from "../../Redux/redux-store";

const Navbar = () => {

    let state = store.getState()

    let navbarElement = state.navbar.navbar.map(n => <NavLink key={n.id} to={"/dialogs/" + n.id} className={s.friend}>
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
        <div>
        <NavLink to={'/users'}>Users</NavLink>
        </div>

        <div className={s.friends}>
            My Friends
         {navbarElement}
        </div>

    </nav>
}

export default Navbar;