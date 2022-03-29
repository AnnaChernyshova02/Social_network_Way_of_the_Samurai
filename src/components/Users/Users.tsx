import React from "react";
import s from './Users.module.css'
import userPhoto from "../../assets/images/png-clipart-computer-icons-user-membership-black-area.png"
import {initialStateType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserType = {
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage: initialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const Users = ({
                   follow,
                   unfollow,
                   usersPage,
                   onPageChanged,
                   pageSize,
                   totalUsersCount,
                   currentPage
               }: UserType) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
        if (i === 20) break
    }

    return <div className={s.styles}>
        <div>
            {pages.map(m => {
                return <span className={currentPage === m ? s.countPage : ''}
                             onClick={() => {
                                 onPageChanged(m)
                             }}> {m} </span>
            })}
        </div>

        {usersPage.users.map(m => <div key={m.id}>
            <div>
                <NavLink to={'/profile/'}>
                    <img className={s.photo} alt={'photos'} src={m.photos.small != null
                        ? m.photos.small
                        : userPhoto}/>
                </NavLink>
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
