import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPost, MyPostsPropsType, newPostText} from "../../../Redux/State";

function MyPosts({posts, newTextPosts}: MyPostsPropsType) {

    let postsElement = posts.map(p => <Post id={p.id}
                                            message={p.message}
                                            likeCounts={p.likeCounts}/>)

    let addPosts = () => {
        addPost(newTextPosts);
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            newPostText(e.currentTarget.value)
        }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={newTextPosts}/>
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

