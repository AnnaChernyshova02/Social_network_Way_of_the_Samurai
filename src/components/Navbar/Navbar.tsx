import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {store} from "../../Redux/redux-store";

const Navbar = () => {

    let state = store.getState()

    let navbarElement = state.navbar.navbar.map(n => <NavLink key={n.id} to={"/dialogs/" + n.id} className={s.friend}>
            <img src={n.avatar} alt={'avatar'}/>
            {n.name}
        </NavLink>
    );

    const activeLink = ({isActive} : {isActive: boolean}) => isActive ? s.activeLink : s.item

    return <nav className={s.nav}>
        <div >
            <div>
                <NavLink to={'/profile'} className={activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'} className={activeLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/news'} className={activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/music'} className={activeLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/settings'} className={activeLink}>Settings</NavLink>
            </div>
            <div>
                <NavLink to={'/users'} className={activeLink}>Users</NavLink>
            </div>
        </div>
        <div className={s.friends}>
            My Friends
            {navbarElement}
        </div>

    </nav>
}

export default Navbar;