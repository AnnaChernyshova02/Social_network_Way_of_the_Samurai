import React from "react";
import s from "./Message.module.css";
import { MessagePropsType } from "../../../Redux/dialogs-reducer";

const Message = ({ message }: MessagePropsType) => {
  return (
    <div className={s.speechWrapper}>
      <div className={s.bubble}>
        <div className={s.txt}>
          <p className={s.name} />
          <p className={s.message}>{message}</p>
          <span className={s.timestamp}>10:20 pm</span>
        </div>
        <div className={s.bubbleArrow} />
      </div>
    </div>
  );
};
export default Message;
