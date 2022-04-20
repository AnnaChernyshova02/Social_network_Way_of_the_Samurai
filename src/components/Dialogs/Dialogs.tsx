import React, {useEffect} from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageContainer from "./Message/AddMessageContainer";
import {store} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hok/AuthRedirect";

const Dialogs = () => {

    let state = store.getState();

    let dialogsElement = state.dialogsPage.dialogs.map(d =>
        <DialogItem key={d.id}
                    id={d.id}
                    name={d.name}
                    avatar={d.avatar}/>);

    let messageElement = state.dialogsPage.messages.map(m =>
        <Message
            key={m.id}
            id={m.id}
            message={m.message}
        />);

    // if(!state.auth.isAuth) return <Navigate to={"/login"}/>
    useEffect(()=>{
        withAuthRedirect(Dialogs)
    },[])


    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messageElement}
                <AddMessageContainer />
            </div>
        </div>
    )
}

export default Dialogs;
