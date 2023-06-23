import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile(props) {
  return (
    <div>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
}
