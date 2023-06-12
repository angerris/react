import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile(props) {
  let postsData = props.state.profilePage.postsData;
  let dispatch = props.dispatch;
  let newPostText = props.state.profilePage.newPostText;
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
