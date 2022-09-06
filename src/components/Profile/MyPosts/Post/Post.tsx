import React from "react";
import s from "./Post.module.css";
import { PostPropsType } from "../../../../Redux/profile-reducer";
import { useAppSelector } from "../../../../Redux/redux-store";
import {
  profileImageSelector,
  profileSelector,
} from "../../../../Selectors/profileSelector";
import userPhoto from "../../../../assets/images/user.svg";

function Post({ message, likeCounts }: PostPropsType) {
  const image = useAppSelector(profileImageSelector);

  return (
    <div className={s.item}>
      <img src={image ?? userPhoto} />
      {message}
      <div>
        <span>like {likeCounts}</span>
      </div>
    </div>
  );
}

export default Post;
