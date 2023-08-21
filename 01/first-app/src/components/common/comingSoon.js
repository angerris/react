import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ComingSoon() {
  return (
    <div className="comingSoon">
      <div className="gears">
        <FontAwesomeIcon id="gear1" icon={faGear} />
        <FontAwesomeIcon id="gear2" icon={faGear} />
      </div>
      this page coming soon<span className="one">.</span>
      <span className="two">.</span>
      <span className="three">.</span>
    </div>
  );
}
