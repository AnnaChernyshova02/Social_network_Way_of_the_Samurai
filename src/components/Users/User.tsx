import React from "react";
import s from './Users.module.scss'
import userPhoto from "../../assets/images/user.svg"
import {NavLink} from "react-router-dom";
import {Button, CardContent} from "@mui/material";
import {useAppSelector} from "../../Redux/redux-store";
import {followingInProgressSelector} from "../../Selectors/usersSelector";
import {UserType} from "../../Redux/users-reducer";

export const User = ({user, following, unfollowing}: OneUserType) => {

  const followingInProgress = useAppSelector(followingInProgressSelector)

  return <div className={s.userBlock}>
      <CardContent>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img className={s.photo} alt={'photos'} src={user.photos.small != null
               ? user.photos.small
               : userPhoto}/>
          </NavLink>
        </div>
        <div>
          {user.followed
             ? <Button size="medium"
                       disabled={followingInProgress.some(id => id === user.id)}
                       onClick={() => {
                         unfollowing(user.id)
                       }}>Unfollow</Button>
             : <Button size="medium"
                       disabled={followingInProgress.some(id => id === user.id)}
                       onClick={() => {
                         following(user.id)
                       }}>Follow</Button>}
        </div>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
      </CardContent>
  </div>
}

type OneUserType = {
  user: UserType
  following: (id: number) => void
  unfollowing: (id: number) => void
}