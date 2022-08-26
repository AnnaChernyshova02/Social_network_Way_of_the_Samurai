import React from "react";
import s from './Navbar.module.css'
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../Redux/redux-store";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const navBarLink = ['/profile', '/dialogs', '/users', '/news', '/music', '/settings']

const Navbar = () => {

  const navigate = useNavigate()
  const navbar = useAppSelector(state => state.navbar.navbar)

  let navbarElement = navbar.map((n, index) =>
     <ListItem key={index} disablePadding divider>
       <ListItemButton>
         <ListItemAvatar>
           <Avatar
              alt={'avatar'}
              src={n.avatar}
           />
         </ListItemAvatar>
         <ListItemText primary={n.name}/>
       </ListItemButton>
     </ListItem>
  );

  const navLink = navBarLink.map(navlink =>
       <ListItem key={navlink} disablePadding divider>
         <ListItemButton>
           <ListItemText primary={navlink.slice(1)} onClick={() => navigate(navlink)}/>
         </ListItemButton>
       </ListItem>);

  const style = {
    width: '100%',
    maxWidth: 360,
  };

  return (
     <nav className={s.nav}>
       <List sx={style} aria-label="mailbox folders">
         {navLink}
         <div className={s.friends}>
           My Friends
         </div>
         {navbarElement}
       </List>
     </nav>)

}

export default Navbar;