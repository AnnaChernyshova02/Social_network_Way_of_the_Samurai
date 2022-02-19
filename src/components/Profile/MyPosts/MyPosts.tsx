import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "../../../Redux/store";

type MyPostsType = {
    updateNewPostText: (text: string) => void
    posts: Array<PostPropsType>
    newTextPosts: string
    addPost: (newTextPosts: string)=> void
}


function MyPosts({posts, newTextPosts, updateNewPostText, addPost}: MyPostsType) {

    let postsElement = posts.map(p => <Post key={p.id}
                                            id={p.id}
                                            message={p.message}
                                            likeCounts={p.likeCounts}/>)

    let addPosts = () => {
        addPost(newTextPosts);
        //dispatch(addPostAction())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewPostText(text)

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

