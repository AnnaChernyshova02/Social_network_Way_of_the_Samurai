import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {

    let dialogsData = [{id: 1, name: 'Ann'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Oksana'},
    ]

    let messageData = [{id: 1, message: 'hi'},
        {id: 2, message: 'YO'},
        {id: 3, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div>
                <Message massege={messageData[0].message} id={messageData[0].id}/>
                <Message massege={messageData[1].message} id={messageData[1].id}/>
                <Message massege={messageData[2].message} id={messageData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs;
