import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {AppPropsType} from "./Redux/State";
import Navbar from "./components/Navbar/Navbar";



const App = ({messagesPage, profilePage, navbar, addPost}: AppPropsType) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbar={navbar}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={messagesPage.dialogs}
                                                 messages={messagesPage.messages}/>}/>
                        <Route path='/profile'
                               element={<Profile posts={profilePage.posts}/>}/>
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
