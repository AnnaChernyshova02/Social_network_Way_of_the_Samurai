import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div className={s.picturesBlock}>
        <div>
            <img
                src={'https://cdn.fishki.net/upload/post/2019/10/30/3127590/tn/52.jpg'}/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
}

export default ProfileInfo;