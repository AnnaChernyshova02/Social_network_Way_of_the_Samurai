import {appReducer, InitialStateType, setAppError, setAppStatus, setIsInitialized} from "./app-reducer";

const state: InitialStateType = {
  status: 'idle',
  error: null,
  isInitialized: false
}

it ('change status', ()=>{
  let action =  setAppStatus('loading');

  let newState = appReducer(state, action);

  expect(newState.status).toBe('loading')
})

it ('test on initialize', ()=>{
  let action =  setIsInitialized(true);

  let newState = appReducer(state, action);

  expect(newState.isInitialized).toBe(true)
})

it('error checking', () => {
  let action = setAppError('Error');

  let newState = appReducer(state, action);

  expect(newState.error).toBe('Error')
})
