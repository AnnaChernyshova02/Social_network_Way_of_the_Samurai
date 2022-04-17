import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navbar: navbarReducer,
        users: usersReducer,
        auth: authReducer
    });

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);

//@ts-ignore
window.store = store

