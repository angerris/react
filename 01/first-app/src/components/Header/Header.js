import x from "./Header.module.css";
import { NavLink } from "react-router-dom";
import mainLogo from "./1.svg";
export default function Header(props) {
  return (
    <header className={x.header}>
      <img src={mainLogo} alt="" width={40} className={x.logo} />
      <div className={x.login}>
        {props.isAuth ? props.login : <NavLink to={"./login"}>login</NavLink>}
      </div>
    </header>
  );
}
