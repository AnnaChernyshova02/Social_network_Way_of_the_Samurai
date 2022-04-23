import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {useAppSelector} from "../../../Redux/redux-store";
import {ProfileStateType} from "../../../Redux/profile-reducer";

function MyPosts({updateNewPostText, addPost}: MyPostsType) {

    const profilePage = useAppSelector<ProfileStateType>(state => state.profilePage)

    let postsElement = profilePage.posts.map(p => <Post key={p.id}
                                            id={p.id}
                                            message={p.message}
                                            likeCounts={p.likeCounts}/>)

    let addPosts = () => {
        addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewPostText(text)
    }

/*    const onKeyUpAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === "Enter" && addPosts()
    }*/

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={profilePage.newTextPosts}
                    /*onKeyUp={onKeyUpAddPost}*//>
                </div>
                <div>
                    <button
                        onClick={addPosts}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;

