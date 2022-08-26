import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
  posts: [
    {id: '123123fff', message: "Hi, how are you?", likeCounts: 15},
    {id: '2343423wer', message: "It's my first post", likeCounts: 20}
  ],
  profile: null,
  status: ""
}

it('length of posts should be incremented', () => {
  let action = addPost('YoYoYo');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3)
})

it('new post should be added message', () => {
  let action = addPost('YoYoYo');

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe('YoYoYo')
})

it('new post should be likeCounts = 0', () => {
  let action = addPost('YoYoYo');

  let newState = profileReducer(state, action);

  expect(newState.posts[2].likeCounts).toBe(0)
})

it('after deleting length of messages should be decrement', () => {
  let action = deletePost('123123fff');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1)
})
