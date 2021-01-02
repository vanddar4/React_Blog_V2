import React from "react";

const Posts = ({ posts }) => (
  <article className="posts container">
    <h1>Posts</h1>
      <ul>
        {posts.length < 1 &&(
          <li key="empty">No posts yet!</li>
        )}
        {posts.map(posts => (
          <li key={posts.id}>
            <h2>{posts.title}</h2>
          </li>
        ))}
      </ul>
  </article>
);
export default Posts;