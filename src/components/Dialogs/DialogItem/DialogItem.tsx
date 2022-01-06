import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number,
    name: string
}

const DialogItem = ({id, name}: DialogItemPropsType) => {
    let path = "/dialogs/" + id;

    return <div>
        <NavLink className={s.dialogsItems} to={path}>{name}</NavLink>
    </div>
}

export default DialogItem;
