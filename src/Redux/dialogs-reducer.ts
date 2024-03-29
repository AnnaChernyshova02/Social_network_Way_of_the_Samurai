import { v1 } from "uuid";
import { DIALOGS } from "./Enum";

let initialState: DialogsStateType = {
  dialogs: [
    {
      id: v1(),
      name: "Ann",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvWUjEhawZyijnjoMfam1uBVZ-2zM6VtOBvfVZKBdPPpNGw_HQad3GAe_kH03AvBPNq4&usqp=CAU",
    },
    {
      id: v1(),
      name: "Natasha",
      avatar:
        "https://i.pinimg.com/originals/14/0d/5d/140d5d5781c7293dbbcb41929df56260.jpg",
    },
    {
      id: v1(),
      name: "Dima",
      avatar:
        "https://картинки-для-срисовки.рф/media/posts_admins/gadkij-ya/gadkij-ya-minon-s-gitaroj.jpg",
    },
    {
      id: v1(),
      name: "Max",
      avatar:
        "https://i.pinimg.com/236x/f7/5e/08/f75e0878d490eb8dea424c62ee0c0cbd.jpg",
    },
    {
      id: v1(),
      name: "Oksana",
      avatar: "https://banana.by/uploads/thumbs/255/254986.jpg",
    },
  ],
  messages: [
    { id: v1(), message: "hi" },
    { id: v1(), message: "Hello" },
    { id: v1(), message: "Yo" },
  ],
};

const dialogsReducer = (
  state: DialogsStateType = initialState,
  action: DialogsActionsType
): DialogsStateType => {
  switch (action.type) {
    case DIALOGS.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: v1(),
            message: action.newMessage,
          },
        ],
      };
    default:
      return state;
  }
};

export const addMessageAction = (newMessage: string) =>
  ({ type: DIALOGS.ADD_MESSAGE, newMessage } as const);

export default dialogsReducer;

export type DialogItemPropsType = {
  id: string;
  name: string;
  avatar: string;
};

export type MessagePropsType = {
  message: string;
  id: string;
};

export type DialogsStateType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>;
};

export type DialogsActionsType = ReturnType<typeof addMessageAction>;
