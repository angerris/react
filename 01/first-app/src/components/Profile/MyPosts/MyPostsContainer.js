import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import Post from "./Post/Post";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

export default function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let postElements = store
          .getState()
          .profilePage.postsData.map((p) => (
            <Post message={p.message} likeCount={p.likeCount} />
          ));
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          store.dispatch(onPostChangeActionCreator(text));
        };
        return (
          <MyPosts
            addPost={addPost}
            updatePostText={onPostChange}
            newPostText={store.getState().profilePage.newPostText}
            postElements={postElements}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
