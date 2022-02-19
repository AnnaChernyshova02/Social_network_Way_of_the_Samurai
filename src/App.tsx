import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, Navigate} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import {AchionsType, DialogsPropsType, MyPostsPropsType, NavbarType} from "./Redux/store";
import {EmptyObject, Store} from "redux";

export type PropsType = {
    store: Store<EmptyObject & { profilePage: MyPostsPropsType; dialogsPage: DialogsPropsType; navbar: NavbarType[]; }, AchionsType>
}

const App = ({store}: PropsType) => {

    let state = store.getState();

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbar={state.navbar}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/components/Profile/Profile'}/>}/>
                        <Route path='/dialogs'
                               element={<Dialogs store={store}/>}/>
                        <Route path='/profile'
                               element={<Profile store={store}/>}/>
                        <Route path='/news'
                               element={<News/>}/>
                        <Route path='/music'
                               element={<Music/>}/>
                        <Route path='/settings'
                               element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
