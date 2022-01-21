import {rerenderEntireTree} from "../render";
import {v1} from "uuid";


let state = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you?", likeCounts: 15},
            {id: v1(), message: "It's my first post", likeCounts: 20}
        ],
    },
    messagesPage: {
        dialogs: [{
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
        ]
    },
    navbar: [{
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
        }]
};

/*export type AddPostPropsType = {
    postMessage: () => void
}*/

export let addPost = (postMessage:any) => {
    let newPost = {
        id: v1(),
        message: postMessage,
        likeCounts: 0
        }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let addMessage = (message: any) => {
    let newMessage = {
        id: v1(),
        message: message,
    }
    state.messagesPage.messages.push(newMessage)
    rerenderEntireTree(state)
}


export default state