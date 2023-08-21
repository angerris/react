import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pfp from "./../../../assets/profpic.avif";
import bg from "./../../../assets/Rectangle 1.png";

import x from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProfileInfo(props) {
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhotoThunk(e.target.files[0]);
    }
  };

  const profilePic = props.profile.photos.small;
  return (
    <div className={x.description}>
      <div className="profileTop">
        <img src={bg} alt="" className="profileBg" />
        <div>
          {!profilePic ? (
            <div className="pfpContainer">
              <img src={pfp} alt="" className="pfp" />
              {props.isOwner ? (
                <label class="custom-file-upload">
                  <FontAwesomeIcon icon={faCamera} className="cam" />

                  <input
                    className="changePfp"
                    type="file"
                    size={30}
                    onChange={(e) => {
                      onPhotoSelected(e);
                    }}
                  />
                </label>
              ) : null}
            </div>
          ) : (
            <div className="pfpContainer">
              <img src={profilePic} alt="" className="pfp" />
              {props.isOwner ? (
                <label class="custom-file-upload">
                  <FontAwesomeIcon icon={faCamera} className="cam" />
                  <input
                    className="changePfp"
                    type="file"
                    size={30}
                    onChange={(e) => {
                      onPhotoSelected(e);
                    }}
                  />
                </label>
              ) : null}
            </div>
          )}
        </div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div className="fullName">{"@" + props.profile.fullName}</div>
      </div>
    </div>
  );
}
