import React from "react";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainerFunc";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<ProfileContainer/>}/>
                    <Route path='/profile/:userId'
                           element={<ProfileContainer/>}/>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer />}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                    <Route path='/users'
                           element={<UserContainer />}/>
                    <Route path='/login'
                           element={<Login />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
