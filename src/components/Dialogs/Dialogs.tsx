import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {


    let dialogs = [{id: 1, name: 'Ann'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Oksana'},
    ]

    let dialogsElement = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messages = [{id: 1, message: 'hi'},
        {id: 2, message: 'YO'},
        {id: 3, message: 'Yo'},
    ]

    let messageElement = messages.map( m => <Message massege={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>

            <div>
                { dialogsElement }
            </div>

            <div>
                { messageElement }
            </div>
        </div>
    )
}

export default Dialogs;
