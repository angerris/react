import x from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
