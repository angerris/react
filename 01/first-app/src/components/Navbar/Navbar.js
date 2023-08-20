import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMessage,
  faMusic,
  faNewspaper,
  faSearch,
  faUserCircle,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className={`${"navbar"}`}>
      <div className="navbar-container">
        <NavLink activeClassName="active" className="navbar-item" to="/profile">
          <FontAwesomeIcon icon={faUserCircle} />
          <p>profile</p>
        </NavLink>
        <NavLink activeClassName="active" className="navbar-item" to="/feed">
          <FontAwesomeIcon icon={faNewspaper} />
          news
        </NavLink>
        <NavLink activeClassName="active" className="navbar-item" to="/dialogs">
          <FontAwesomeIcon icon={faMessage} />
          messages
        </NavLink>
        <NavLink activeClassName="active" className="navbar-item" to="/music">
          <FontAwesomeIcon icon={faMusic} />
          music
        </NavLink>
        <NavLink activeClassName="active" className="navbar-item" to="/users">
          <FontAwesomeIcon icon={faSearch} />
          find users
        </NavLink>
        <NavLink activeClassName="active" className="navbar-item" to="/friends">
          <FontAwesomeIcon icon={faUserFriends} />
          friends
        </NavLink>
        <NavLink
          activeClassName="active"
          className="navbar-item"
          to="/settings"
        >
          <FontAwesomeIcon icon={faGear} />
          settings
        </NavLink>
      </div>
    </nav>
  );
}
