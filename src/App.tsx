import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import {UserContainer} from "./components/Users/UsersContainer";

const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile/>}/>
                    <Route path='/dialogs'
                           element={<Dialogs/>}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                    <Route path='/users'
                           element={<UserContainer />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
