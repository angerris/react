import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import x from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  //props
  let newPostText = props.newPostText;
  let dispatch = props.dispatch;
  let postsData = props.postsData;
  //generating new post
  let postElements = postsData.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  //functions
  let addPost = () => {
    dispatch(addPostActionCreator());
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    dispatch(onPostChangeActionCreator(text));
  };
  return (
    <div className={x.MyPosts}>
      <div>my posts</div>
      <div>new post</div>
      <textarea onChange={onPostChange} value={newPostText} />
      <button onClick={addPost}>add post</button>
      <div className={x.posts}>{postElements}</div>
    </div>
  );
}
