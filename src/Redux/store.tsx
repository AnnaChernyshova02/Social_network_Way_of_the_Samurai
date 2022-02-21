import {v1} from "uuid";
import ProfileReducer, {addPostAction, newPostTextAction} from "./profile-reducer";
import DialogsReducer, {addMessageAction, newMessageAction} from "./dialogs-reducer";
import NavbarReducer from "./navbar-reducer";

export type MessagePropsType = {
    message: string,
    id: string,
}
export type DialogItemPropsType = {
    id: string,
    name: string,
    avatar: string,
}
export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessage: string
}

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newTextPosts: string
}
export type PostPropsType = {
    id: string,
    message: string,
    likeCounts: number
}
export type NavbarType = {
    id: string,
    name: string,
    avatar: string,
}

export type RootStateType = {
    dialogsPage: DialogsPropsType,
    profilePage: MyPostsPropsType,
    navbar: Array<NavbarType>,
}

export type AchionsType =
    ReturnType<typeof addPostAction> |
    ReturnType<typeof newPostTextAction> |
    ReturnType<typeof addMessageAction> |
    ReturnType<typeof newMessageAction>

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: AchionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi, how are you?", likeCounts: 15},
                {id: v1(), message: "It's my first post", likeCounts: 20}
            ],
            newTextPosts: 'Hello',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: v1(),
                    name: 'Ann',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvWUjEhawZyijnjoMfam1uBVZ-2zM6VtOBvfVZKBdPPpNGw_HQad3GAe_kH03AvBPNq4&usqp=CAU'
                },
                {
                    id: v1(),
                    name: 'Natasha',
                    avatar: 'https://i.pinimg.com/originals/14/0d/5d/140d5d5781c7293dbbcb41929df56260.jpg'
                },
                {
                    id: v1(),
                    name: 'Dima',
                    avatar: 'https://картинки-для-срисовки.рф/media/posts_admins/gadkij-ya/gadkij-ya-minon-s-gitaroj.jpg'
                },
                {
                    id: v1(),
                    name: 'Max',
                    avatar: 'https://i.pinimg.com/236x/f7/5e/08/f75e0878d490eb8dea424c62ee0c0cbd.jpg'
                },
                {
                    id: v1(),
                    name: 'Oksana',
                    avatar: 'https://banana.by/uploads/thumbs/255/254986.jpg'
                },
            ],
            messages: [
                {id: v1(), message: 'hi'},
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Yo'},
            ],
            newMessage: ''
        },
        navbar: [
            {
                id: v1(),
                name: 'Ann',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvWUjEhawZyijnjoMfam1uBVZ-2zM6VtOBvfVZKBdPPpNGw_HQad3GAe_kH03AvBPNq4&usqp=CAU'
            },
            {
                id: v1(),
                name: 'Natasha',
                avatar: 'https://i.pinimg.com/originals/14/0d/5d/140d5d5781c7293dbbcb41929df56260.jpg'
            },
            {
                id: v1(),
                name: 'Dima',
                avatar: 'https://картинки-для-срисовки.рф/media/posts_admins/gadkij-ya/gadkij-ya-minon-s-gitaroj.jpg'
            }],
    },
    _callSubscriber(state: RootStateType) {
        console.log('hello')
    },
    getState() {
        return this._state;
    },
    dispatch: function (action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = NavbarReducer(this._state.navbar, action);
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },

};
