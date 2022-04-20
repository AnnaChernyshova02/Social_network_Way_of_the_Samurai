import {v1} from "uuid";

export type NavbarType = {
    id: string,
    name: string,
    avatar: string,
}

export type initialStateType = {
    navbar: NavbarType[]
}

let initialState: initialStateType = {
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
            }]
    }

const navbarReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    return state;
};
export default navbarReducer;