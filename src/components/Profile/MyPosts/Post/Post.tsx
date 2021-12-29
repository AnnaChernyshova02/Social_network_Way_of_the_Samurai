import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likeCounts: number
}
function Post(props: PostPropsType) {
    return <div className={s.item}>
        <img
            src={'https://n1s1.hsmedia.ru/89/88/af/8988aff792dffa49452091530dd6a5c0/720x432_0xac120003_5502188341611657789.jpg'}/>
        {props.message}
        <div>
            <span>
                {props.likeCounts} like
            </span>
        </div>
    </div>


}

export default Post;