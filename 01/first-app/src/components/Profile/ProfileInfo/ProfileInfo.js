import pfp from "./../../../assets/profpic.avif";
import x from "./ProfileInfo.module.css";

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
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  );
}
