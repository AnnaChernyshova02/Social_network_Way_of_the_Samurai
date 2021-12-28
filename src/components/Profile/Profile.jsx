import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div className={s.content}>
        <div>
            <img
                src={'https://s.zagranitsa.com/images/articles/6729/870x486/53d189dfcd54fa9ecae756ddf5a7c2ee.jpg?1530714543'}/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;