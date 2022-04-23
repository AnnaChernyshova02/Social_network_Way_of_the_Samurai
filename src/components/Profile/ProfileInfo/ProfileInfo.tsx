import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePagePropsType} from "../Profile";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = ({profile}: ProfilePagePropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    return <div className={s.picturesBlock}>
        <div>
            <img
                src={'https://cdn.fishki.net/upload/post/2019/10/30/3127590/tn/52.jpg'}
                className={s.mainDrawing}/>
        </div>
        <div className={s.descriptionBlock}>
            <div>
                <img src={profile.photos?.small} className={s.imgProfile}/>
            </div>
            <span><ProfileStatus status={"Hello my friends"}/></span>
            <div>
                About me : {profile.aboutMe}
            </div>
            <div>My Full Name - {profile.fullName}</div>

            <ul><span>My Contacts : </span>
                <li>facebook: {profile.contacts?.facebook}</li>
                <li>github: {profile.contacts?.github}</li>
                <li>vk: {profile.contacts?.vk}</li>
                <li>twitter: {profile.contacts?.twitter}</li>
                <li>instagram: {profile.contacts?.instagram}</li>
                <li>youtube: {profile.contacts?.youtube}</li>
            </ul>

        </div>

    </div>
}

export default ProfileInfo;