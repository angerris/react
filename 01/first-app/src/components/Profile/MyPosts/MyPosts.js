import MyPostsForm from "./MyPostsForm";

export default function MyPosts(props) {
  let newPostText = props.newPostText;

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updatePostText(text);
  };
  return (
    <MyPostsForm
      onPostChange={onPostChange}
      addPost={addPost}
      newPostText={newPostText}
      {...props}
    />
  );
}
