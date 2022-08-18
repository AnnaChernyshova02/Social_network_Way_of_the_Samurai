import React from "react";
import s from './Users.module.scss'
import userPhoto from "../../assets/images/png-clipart-computer-icons-user-membership-black-area.png"
import {initialStateType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {Button, CardContent} from "@mui/material";
import {Box} from "@mui/system";

const Users = ({
                 usersPage,
                 onPageChanged,
                 pageSize,
                 totalUsersCount,
                 followingInProgress,
                 following,
                 unfollowing
               }: UserType) => {

  let pageCount = Math.ceil(totalUsersCount / pageSize)

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChanged(value)
  }

  return <div className={s.styles}>
    <div>
      <Stack spacing={2} sx={{
        marginLeft: '25%',
        marginTop: '15px',
        marginBottom: '15px'
      }}>
        <Pagination count={pageCount}
                    onChange={changePage}
                    showFirstButton
                    showLastButton
                    color="secondary"/>
      </Stack>
    </div>
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      mx: '2px'
    }}>
      {usersPage.users.map(m => <div key={m.id} className={s.userBlock}>
           <CardContent>
             <div>
               <NavLink to={`/profile/${m.id}`}>
                 <img className={s.photo} alt={'photos'} src={m.photos.small != null
                    ? m.photos.small
                    : userPhoto}/>
               </NavLink>
             </div>
             <div>
               {m.followed
                  ? <Button size="medium"
                            disabled={followingInProgress.some(id => id === m.id)}
                            onClick={() => {
                              following(m.id)
                            }}>Unfollow</Button>
                  : <Button size="medium"
                            disabled={followingInProgress.some(id => id === m.id)}
                            onClick={() => {
                              unfollowing(m.id)
                            }}>Follow</Button>}
             </div>
             <div>
               <div>{m.name}</div>
               <div>{m.status}</div>
               <div>{"m.location.country"}</div>
               <div>{"m.location.city"}</div>
             </div>
           </CardContent>
         </div>
      )}</Box>
  </div>;
}

type UserType = {
  onPageChanged: (pageNumber: number) => void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  usersPage: initialStateType
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followingInProgress: number[]
  toggleIsFollowingProgress: (id: number, isFetching: boolean) => void
  following: (id: number) => void
  unfollowing: (id: number) => void
}

export default Users;
