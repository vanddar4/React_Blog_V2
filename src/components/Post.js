import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { Link } from "react-router-dom";

const Post = ({post}) => {
  const converter = new QuillDeltaToHtmlConverter(post.content.ops,{});
  const contentHTML = converter.convert();
  
  return (
    <article className="post container">
      <h1>{post.title}</h1>
      <p>
        <Link to={`/edit/${post.slug}`}>Edit</Link>
      </p>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: contentHTML}}
      />
    </article>
  );  
};

export default Post;