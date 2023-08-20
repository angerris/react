import pfp from "./../../../assets/profpic.avif";
import x from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

export default function ProfileInfo(props) {
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhotoThunk(e.target.files[0]);
    }
  };
  debugger;

  const profilePic = props.profile.photos.small;
  return (
    <div className={x.description}>
      <img
        src="https://w0.peakpx.com/wallpaper/223/577/HD-wallpaper-secluded-in-the-woods-hills-forest-house-grass-trees-mist-green-morning-landscape.jpg"
        alt=""
        className={x.img}
      />
      <div>
        {!profilePic ? (
          <img src={pfp} alt="" srcset="" width={100} />
        ) : (
          <img src={profilePic} alt="" />
        )}
        <div>
          {props.isOwner ? (
            <input
              type="file"
              onChange={(e) => {
                onPhotoSelected(e);
              }}
            />
          ) : null}
        </div>
        <ProfileStatus
          fullName={props.profile.fullName}
          status={props.status}
          aboutMe={props.profile.aboutMe}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}
