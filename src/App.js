import React from "react";
import './App.css';


function App() {
    return <div className='app-wrapper'>
        <header className='header'>
            <img src='https://data.1freewallpapers.com/download/psychedelic-abstract-blue-flower-fantasy-art-abstract.jpg'/>
            </header>
        <nav className='nav'>

            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>

        </nav>
        <div className='content'>
            <div>
                <img src={'https://s.zagranitsa.com/images/articles/6729/870x486/53d189dfcd54fa9ecae756ddf5a7c2ee.jpg?1530714543'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default App;
