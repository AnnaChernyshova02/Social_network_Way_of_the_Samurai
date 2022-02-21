import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "../../../Redux/store";

type MyPostsType = {
    updateNewPostText: (text: string) => void
    addPost: ()=> void
    profilePage: MyPostsPropsType
}

function MyPosts({updateNewPostText, addPost, profilePage}: MyPostsType) {

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

