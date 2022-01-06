import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts() {

    let posts = [{ message: "Hi, how are you?", likeCounts: 15},
        { message: "It's my first post", likeCounts: 20}]

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