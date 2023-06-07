import x from "./MyPosts.module.css";
import React, { useRef } from "react";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/state";
export default function MyPosts(props) {
  //props
  let newPostText = props.newPostText;
  let dispatch = props.dispatch;
  let postsData = props.postsData;
  //generating new post
  let postElements = postsData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  //ref
  let textElement = useRef(null);

  //functions
  let addPost = () => {
    dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = textElement.current.value;
    dispatch(onPostChangeActionCreator(text));
  };
  return (
    <div className={x.MyPosts}>
      <div>my posts</div>
      <div>new post</div>
      <textarea ref={textElement} onChange={onPostChange} value={newPostText} />
      <button onClick={addPost}>add post</button>
      <div className={x.posts}>{postElements}</div>
    </div>
  );
}
