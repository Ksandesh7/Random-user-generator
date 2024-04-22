import React from "react";

const PostCard = (props) => {

    return (
        <div className="post-card">
            <h3>{props.title}</h3>
            <h5>{props.body}</h5>
        </div>
    )
}

export default PostCard;