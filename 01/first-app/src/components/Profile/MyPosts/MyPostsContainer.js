import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import Post from "./Post/Post";
import MyPosts from "./MyPosts";

export default function MyPostsContainer(props) {
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
  let onPostChange = (text) => {
    dispatch(onPostChangeActionCreator(text));
  };
  return (
    <MyPosts
      addPost={addPost}
      updatePostText={onPostChange}
      newPostText={newPostText}
      postElements={postElements}
    />
  );
}
