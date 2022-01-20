import React, {createRef, useRef} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "./Post/Post"


type MyPostsPropsType = {
    posts: Array<PostPropsType>
}

function MyPosts({posts}: MyPostsPropsType) {

    let postsElement = posts.map( p => <Post message={p.message} likeCounts={p.likeCounts} />)

    let newPostElement = createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;