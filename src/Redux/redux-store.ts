import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionsType, appReducer} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducer = combineReducers(
   {
     app: appReducer,
     profilePage: profileReducer,
     dialogsPage: dialogsReducer,
     navbar: navbarReducer,
     users: usersReducer,
     auth: authReducer,
   });

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector


export type AppActionsType = AuthActionsType
   | ProfileActionsType
   | UsersActionsType
   | DialogsActionsType
   | ActionsType
export type AppRootStateType = ReturnType<typeof store.getState>

export type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>

//@ts-ignore
window.store = store

