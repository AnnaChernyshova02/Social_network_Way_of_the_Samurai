import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {AppType, newPostText} from "./Redux/State";
import Navbar from "./components/Navbar/Navbar";

const App = ({state}: AppType) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                 messages={state.dialogsPage.messages}/>}/>
                        <Route path='/profile'
                               element={<Profile posts={state.profilePage.posts}
                                                 newTextPosts={state.profilePage.newTextPosts}
                               />}/>
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
