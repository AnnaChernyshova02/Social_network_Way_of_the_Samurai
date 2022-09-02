import React, { useEffect } from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageContainer from "./Message/AddMessageContainer";
import { useAppSelector } from "../../Redux/redux-store";
import { withAuthRedirect } from "../../hok/AuthRedirect";
import { DialogsStateType } from "../../Redux/dialogs-reducer";

const Dialogs = () => {
  const dialogsPage = useAppSelector<DialogsStateType>(
    (state) => state.dialogsPage
  );

  let dialogsElement = dialogsPage.dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} />
  ));

  let messageElement = dialogsPage.messages.map((m) => (
    <Message key={m.id} id={m.id} message={m.message} />
  ));

  useEffect(() => {
    withAuthRedirect(Dialogs);
  }, []);

  return (
    <div className={s.dialogs}>
      <div>{dialogsElement}</div>
      <div>
        {messageElement}
        <AddMessageContainer />
      </div>
    </div>
  );
};

export default Dialogs;
