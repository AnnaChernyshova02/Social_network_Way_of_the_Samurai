import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import {UserContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainerFunc2";
import {Route, Routes} from "react-router-dom";
import {HeaderContainer} from "./components/Header/HeaderContainerFunc";


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
                           element={<Dialogs/>}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                    <Route path='/users'
                           element={<UserContainer />}/>
                    <Route path='login'
                           element={<ProfileContainer />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
