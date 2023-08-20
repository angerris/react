import x from "./Music.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Music() {
  return (
    <div className={x.music}>
      <div className="comingSoon">
        <div className="gears">
          <FontAwesomeIcon id="gear1" icon={faGear} />
          <FontAwesomeIcon id="gear2" icon={faGear} />
        </div>
        this page coming soon<span className="one">.</span>
        <span className="two">.</span>
        <span className="three">.</span>
      </div>
    </div>
  );
}
