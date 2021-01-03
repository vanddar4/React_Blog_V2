import React from "react";

const Post = ({post}) => (
    <article className="posts container">
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
);

export default Post;