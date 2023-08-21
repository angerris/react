import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideInfo(props) {
  return (
    <div className="sideInfo">
      <AboutMe aboutMe={props.profile.aboutMe} />
      <Contact />
    </div>
  );
}
export function AboutMe(props) {
  return (
    <div className="aboutMe">
      <h4>About me</h4>
      {props.aboutMe}
    </div>
  );
}
export function Contact(props) {
  return (
    <div className="contact">
      <FontAwesomeIcon icon={faFaceAngry} />

      <FontAwesomeIcon icon={faFaceAngry} />

      <FontAwesomeIcon icon={faFaceAngry} />

      <FontAwesomeIcon icon={faFaceAngry} />
    </div>
  );
}
