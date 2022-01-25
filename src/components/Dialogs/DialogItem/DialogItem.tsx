import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {DialogItemPropsType} from "../../../Redux/State";

const DialogItem = ({id, name, avatar}: DialogItemPropsType) => {
    let path = "/dialogs/" + id;

    return <div>
        <NavLink className={s.dialogsItems} to={path}>
            <img src={avatar}/>{name}</NavLink>
    </div>
}

export default DialogItem;
