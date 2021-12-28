import React from "react";
import s from './Post.module.css'

function Post() {
    return <div className={s.item}>
        <img
            src={'https://n1s1.hsmedia.ru/89/88/af/8988aff792dffa49452091530dd6a5c0/720x432_0xac120003_5502188341611657789.jpg'}/>
        post 1
        <div>
            <span>
                like
            </span>
        </div>
    </div>


}

export default Post;