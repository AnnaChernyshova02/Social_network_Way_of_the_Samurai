import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "../../../Redux/State";

type NewPostType = {
    posts: Array<PostPropsType>
    addPost: (newTextPosts: string) => void
    newPostText: (newText: string) => void
    newTextPosts: string
}

function MyPosts({addPost, newPostText, posts, newTextPosts}: NewPostType) {

    let postsElement = posts.map(p => <Post key={p.id}
                                            id={p.id}
                                            message={p.message}
                                            likeCounts={p.likeCounts}/>)

    let addPosts = () => {
        addPost(newTextPosts);
    }

    console.log(newTextPosts)

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newPostText(e.currentTarget.value)
    }

    console.log(newPostText)

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

