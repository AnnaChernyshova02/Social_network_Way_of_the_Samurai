import React from "react";
import s from './Users.module.css'
import {v1} from "uuid";
import {UsersPropsType} from "./UsersContainer";

function Users({follow, unfollow, usersPage, setUsers}: UsersPropsType) {

    if(usersPage.users.length === 0) {
        setUsers ([
            {
                id: v1(),
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2017/12/original-24.jpg',
                followed: false,
                fullName: 'Ann',
                status: 'Bosss',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: v1(),
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2017/12/original-24.jpg',
                followed: true,
                fullName: 'Dima',
                status: 'Bosss',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: v1(),
                photoUrl: 'https://www.ejin.ru/wp-content/uploads/2017/12/original-24.jpg',
                followed: false,
                fullName: 'Max',
                status: 'Bosss',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
        ])
    }

    return <div className={s.styles}>
        {usersPage.users.map(m => <div key={m.id}>
            <div>
                <img className={s.photo} alt={'photos'} src={m.photoUrl}/>
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
                    {m.fullName + ' ' + m.status}
                </span>
                <span>
                    <div>{m.location.country}</div>
                    <div>{m.location.city}</div>
                </span>
            </div>
        </div>)}
    </div>;
}

export default Users;
