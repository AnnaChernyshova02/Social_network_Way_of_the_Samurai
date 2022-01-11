
let state = {
    profilePage: {
        posts: [{message: "Hi, how are you?", likeCounts: 15},
            {message: "It's my first post", likeCounts: 20}],
    },
    messagesPage: {
        dialogs: [{id: 1, name: 'Ann'},
            {id: 2, name: 'Natasha'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Max'},
            {id: 5, name: 'Oksana'},
        ],
        messages: [{id: 1, message: 'hi'},
            {id: 2, message: 'YO'},
            {id: 3, message: 'Yo'},
        ]
    },
};

export default state;