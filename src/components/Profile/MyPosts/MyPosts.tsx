import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "./Post/Post"


type MyPostsPropsType = {
    posts: Array<PostPropsType>
}

function MyPosts({posts}: MyPostsPropsType) {

    let postsElement = posts.map( p => <Post message={p.message} likeCounts={p.likeCounts} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;