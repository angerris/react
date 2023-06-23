import pfp from "./../../../assets/profpic.avif";
import x from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

export default function ProfileInfo(props) {
  return (
    <div className={x.description}>
      <img
        src="https://w0.peakpx.com/wallpaper/223/577/HD-wallpaper-secluded-in-the-woods-hills-forest-house-grass-trees-mist-green-morning-landscape.jpg"
        alt=""
        className={x.img}
      />

      <div>
        <img src={pfp} alt="" srcset="" width={100} />
        <ProfileStatus
          fullName={props.profile.fullName}
          status={props.status}
          aboutMe={props.profile.aboutMe}
        />
      </div>
    </div>
  );
}
