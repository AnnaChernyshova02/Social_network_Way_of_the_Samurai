import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src={'https://s.zagranitsa.com/images/articles/6729/870x486/53d189dfcd54fa9ecae756ddf5a7c2ee.jpg?1530714543'}/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
}

export default ProfileInfo;