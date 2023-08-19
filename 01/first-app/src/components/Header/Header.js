import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <header className={`${"header"}`}>
      <FontAwesomeIcon icon={faCoffee} className="headerLogo" />
      <div className={"loginButton"}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logoutThunk}>logout</button>
          </div>
        ) : (
          <NavLink to={"./login"}>login</NavLink>
        )}
      </div>
    </header>
  );
}
