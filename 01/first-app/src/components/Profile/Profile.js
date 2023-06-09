import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile(props) {
  let postsData = props.postsData;
  let newPostText = props.newPostText;
  let dispatch = props.dispatch;

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        postsData={postsData}
        dispatch={dispatch}
        newPostText={newPostText}
      />
    </div>
  );
}
