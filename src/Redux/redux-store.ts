import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunk, { ThunkAction} from "redux-thunk";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navbar: navbarReducer,
        users: usersReducer,
        auth: authReducer
    });

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppActionsType = AuthActionsType
    | ProfileActionsType
    | UsersActionsType
    | DialogsActionsType

export type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>

//@ts-ignore
window.store = store

