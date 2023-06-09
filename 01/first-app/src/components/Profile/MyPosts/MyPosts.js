import x from "./MyPosts.module.css";
export default function MyPosts(props) {
  let newPostText = props.newPostText;
  let postElements = props.postElements;
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updatePostText(text);
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
