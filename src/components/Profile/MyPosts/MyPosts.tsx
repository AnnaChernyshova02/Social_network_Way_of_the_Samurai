import React, {createRef, useRef} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "./Post/Post"
import {addPost} from "../../../Redux/State";


type MyPostsPropsType = {
    posts: Array<PostPropsType>
}

function MyPosts({posts}: MyPostsPropsType) {

    let postsElement = posts.map(p => <Post id={p.id} message={p.message} likeCounts={p.likeCounts}/>)
    let newPostElement = createRef<HTMLTextAreaElement>();

    let addPosts = () => {
        let text = newPostElement.current?.value;
        addPost(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;

