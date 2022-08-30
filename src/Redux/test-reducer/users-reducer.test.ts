import {
  follow,
  initialStateType,
  setCurrentPage, setTotalUsersCount,
  setUsers,
  toggleIsFetching, toggleIsFollowingProgress,
  unfollow,
  usersReducer
} from "../users-reducer";

let state: initialStateType = {
  users: [
    {
      id: 1,
      photos: {
        small: 'd',
        large: 'd',
      },
      followed: false,
      name: 'Ann',
      status: 'sss',
      location: {
        city: 's',
        country: 'S'
      }
    }
  ],
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

it('isFetching changed', () => {
  let action = toggleIsFetching(false);

  let newState = usersReducer(state, action);

  expect(newState.isFetching).toBe(false)
})

it('following in new user', () => {
  let action = follow(1);

  let newState = usersReducer(state, action);

  expect(newState.users[0].followed).toBe(true)
})

it('unfollowing in new user', () => {
  let action = unfollow(1);

  let newState = usersReducer(state, action);

  expect(newState.users[0].followed).toBe(false)
})

it('setUsers ', () => {
  let action = setUsers([{
       id: 2,
       photos: {
         small: 'd',
         large: 'd',
       },
       followed: false,
       name: 'Ann',
       status: 'sss',
       location: {
         city: 's',
         country: 'S'
       }
     }],
  )

  let newState = usersReducer(state, action);

  expect(newState.users[0].id).toBe(2)
})

it('setCurrentPage ', () => {
  let action = setCurrentPage(4)

  let newState = usersReducer(state, action);

  expect(newState.currentPage).toBe(4)
})

it('setTotalUsersCount ', () => {
  let action = setTotalUsersCount(4)

  let newState = usersReducer(state, action);

  expect(newState.totalUsersCount).toBe(4)
})

it('toggleIsFollowingProgress ', () => {
  let action = toggleIsFollowingProgress(1, false)

  let newState = usersReducer(state, action);

  expect(newState.followingInProgress.length).toBe(0)
})
