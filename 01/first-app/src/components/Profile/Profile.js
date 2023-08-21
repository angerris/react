import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SideInfo from "./SideInfo/SideInfo";
export default function Profile(props) {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        {...props}
        updateStatus={props.updateStatusThunk}
        savePhoto={props.savePhoto}
      />
      <div className="profileContent">
        <SideInfo {...props} />
        <MyPostsContainer />
      </div>
    </div>
  );
}
