import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {NewPostType} from "../Profile";
import {addPostAction, newPostTextAction} from "../../../Redux/State";

function MyPosts({posts, newTextPosts, dispatch}: NewPostType) {

    let postsElement = posts.map(p => <Post key={p.id}
                                            id={p.id}
                                            message={p.message}
                                            likeCounts={p.likeCounts}/>)

    let addPosts = () => {
        //addPost(newTextPosts);
        dispatch(addPostAction())

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        //newPostText(e.currentTarget.value)
        dispatch(newPostTextAction(text))
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

