import {authReducer, AuthStateType, setAuthUserData, setLogin} from "./auth-reducer";

let state: AuthStateType = {
  id: 2,
  email: 'blabla@bla.bla',
  login: 'samurai',
  isAuth: false
}

it('email checking', () => {
  let action = setAuthUserData(121212, '2222222@gggg.com', '2222222@gggg.com');

  let newState = authReducer(state, action);

  expect(newState.email).toBe('2222222@gggg.com')
  expect(newState.login).toBe('2222222@gggg.com')
})

it('auth checking', () => {
  let action = setLogin(true);

  let newState = authReducer(state, action);

  expect(newState.isAuth).toBe(true)
})

