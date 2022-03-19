import React from "react";
import s from './Users.module.css'
import {v1} from "uuid";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/png-clipart-computer-icons-user-membership-black-area.png"

function Users({follow, unfollow, usersPage, setUsers}: UsersPropsType) {

    const getUsers = () => {

        if (usersPage.users.length === 0) {

            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    setUsers(response.data.items)
                })

        }
    }

    return <div className={s.styles}>
        <button onClick={getUsers}>Get Users</button>
        {usersPage.users.map(m => <div key={m.id}>
            <div>
                <img className={s.photo} alt={'photos'} src={m.photos.small != null
                    ? m.photos.small
                    : userPhoto}/>
            </div>
            <div>
                {m.followed
                    ? <button onClick={() => {
                        unfollow(m.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        follow(m.id)
                    }}>Follow</button>}
            </div>
            <div>
                <span className={s.names}>
                    {m.name + ' ' + m.status}
                </span>
                <span>
                    <div>{"m.location.country"}</div>
                    <div>{"m.location.city"}</div>
                </span>
            </div>
        </div>)}
    </div>;
}

export default Users;
