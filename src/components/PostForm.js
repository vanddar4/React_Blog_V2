import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";

const PostForm = ({ post: propsPost, addNewPost, updatePost}) => {
  const [post, setPost] = useState({...propsPost});
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [saved, setSaved] = useState("false");

  const prevPostRef = useRef();
  useEffect(() => {
    prevPostRef.current = post;
  }, [post]);
  const prevPost =prevPostRef.current;

  const quillRef = React.useRef();
  useEffect(() => {
    if(prevPost && quillRef.current){
      if(propsPost.id !== prevPost.id){
        setPost({...propsPost});
        quillRef.current.getEditor().setContents(``);
      }
    }
  }, [prevPost, propsPost])

  const handlePostForm = (e) => {
    e.preventDefault();
    if (post.title) {
      if(updatePost) {
        updatePost(post);
      } else {
        addNewPost(post);
      }
      setSaved(true);
    } else {
      alert("Title Required");
    }
  };

  if (saved === true) {
    return <Redirect to="/" />;
  }

  return (
    <form className="container" onSubmit={handlePostForm}>
      <h1> Add a New Post </h1>
        <p>
          <label htmlFor="form-title">Title:</label>
          <br />
          <input
            defaultValue={post.title}
            id="form-title"
            value={post.title}
            onChange={(e) => 
              setPost({ 
                ...post, 
                title: e.target.value,
              })
            }  
          />
        </p>
        <p>
          <label htmlFor="form-content">Content:</label>
        </p>
        <Quill    
          onChange={(content, delta, source, editor) => {
            setPost({
              ...post,
              content: editor.getContents(),
            });
          }}
        />
        <p>
          <button type="submit">Save</button>
        </p>
    </form>
  );
};
export default PostForm
