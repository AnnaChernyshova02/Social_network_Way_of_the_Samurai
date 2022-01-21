import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar, {NavbarPropsType} from "./components/Navbar/Navbar"
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
/*import {AddPostPropsType} from "./Redux/State";*/

export type AppPropsType = {
    state: {
        messagesPage: {
            dialogs: Array<DialogItemPropsType>
            messages: Array<MessagePropsType>
        }
        profilePage: {
            posts: Array<PostPropsType>
        }
        navbar: Array<DialogItemPropsType>
    },
    addPost: (postMessage: any) => void
}

const App = ({state, addPost}: AppPropsType) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbar={state.navbar}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={state.messagesPage.dialogs}
                                                 messages={state.messagesPage.messages}/>}/>
                        <Route path='/profile'
                               element={<Profile posts={state.profilePage.posts}/>}/>
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
