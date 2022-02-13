import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {NewPostType} from "../Profile";

function MyPosts({posts, newTextPosts, dispatch}: NewPostType) {

    let postsElement = posts.map(p => <Post key={p.id}
                                            id={p.id}
                                            message={p.message}
                                            likeCounts={p.likeCounts}/>)

    let addPosts = () => {
        //addPost(newTextPosts);
        dispatch({type: 'ADD-POST'})

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        //newPostText(e.currentTarget.value)
        dispatch({type: 'NEW-POST-TEXT', newText: text})
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

