import { NavLink } from "react-router-dom";
import logo from "./../../assets/Logo.svg";
export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="headerLogo" alt="header logo" />
      <div className={"loginButton "}>
        {props.isAuth ? (
          <div className="logoutContainer">
            {props.isAuth && props.login !== undefined
              ? "@" + props.login
              : null}
            <button onClick={props.logoutThunk} className="btn btn-primary">
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={"./login"}>
            <button className="btn btn-primary">Log in</button>
          </NavLink>
        )}
      </div>
    </header>
  );
}
