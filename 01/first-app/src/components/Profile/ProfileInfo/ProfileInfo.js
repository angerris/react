import Preloader from "../../common/preloader/preloader";
import x from "./ProfileInfo.module.css";

export default function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={x.description}>
      <img
        src="https://w0.peakpx.com/wallpaper/223/577/HD-wallpaper-secluded-in-the-woods-hills-forest-house-grass-trees-mist-green-morning-landscape.jpg"
        alt=""
        className={x.img}
      />

      <div>
        <img src={props.profile.photos.small} alt="" srcset="" />
        ava + description
      </div>
    </div>
  );
}
