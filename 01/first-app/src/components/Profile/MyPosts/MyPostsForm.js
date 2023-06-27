import x from "./MyPosts.module.css";
export default function MyPostsForm(props) {
  return (
    <div className={x.MyPosts}>
      <div>my posts</div>
      <div>new post</div>
      <textarea onChange={props.onPostChange} value={props.newPostText} />
      <button onClick={props.addPost}>add post</button>
      <div className={x.posts}>{props.postElements}</div>
    </div>
  );
}
