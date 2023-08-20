import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile(props) {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        {...props}
        updateStatus={props.updateStatusThunk}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
}
