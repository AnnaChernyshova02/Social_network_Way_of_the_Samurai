let state = {
    profilePage: {
        posts: [{message: "Hi, how are you?", likeCounts: 15},
            {message: "It's my first post", likeCounts: 20}],
    },
    messagesPage: {
        dialogs: [{
            id: 1,
            name: 'Ann',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvWUjEhawZyijnjoMfam1uBVZ-2zM6VtOBvfVZKBdPPpNGw_HQad3GAe_kH03AvBPNq4&usqp=CAU'
        },
            {
                id: 2,
                name: 'Natasha',
                avatar: 'https://i.pinimg.com/originals/14/0d/5d/140d5d5781c7293dbbcb41929df56260.jpg'
            },
            {
                id: 3,
                name: 'Dima',
                avatar: 'https://картинки-для-срисовки.рф/media/posts_admins/gadkij-ya/gadkij-ya-minon-s-gitaroj.jpg'
            },
            {
                id: 4,
                name: 'Max',
                avatar: 'https://i.pinimg.com/236x/f7/5e/08/f75e0878d490eb8dea424c62ee0c0cbd.jpg'
            },
            {
                id: 5,
                name: 'Oksana',
                avatar: 'https://banana.by/uploads/thumbs/255/254986.jpg'
            },
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yo'},
        ]
    },
    navbar: [{
        id: 1,
        name: 'Ann',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvWUjEhawZyijnjoMfam1uBVZ-2zM6VtOBvfVZKBdPPpNGw_HQad3GAe_kH03AvBPNq4&usqp=CAU'
    },
        {
            id: 2,
            name: 'Natasha',
            avatar: 'https://i.pinimg.com/originals/14/0d/5d/140d5d5781c7293dbbcb41929df56260.jpg'
        },
        {
            id: 3,
            name: 'Dima',
            avatar: 'https://картинки-для-срисовки.рф/media/posts_admins/gadkij-ya/gadkij-ya-minon-s-gitaroj.jpg'
        }]
};

export default state;