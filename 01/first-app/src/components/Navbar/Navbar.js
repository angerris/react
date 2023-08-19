import { NavLink } from "react-router-dom";
import x from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={`${"navbar"}`}>
      <ul>
        <li>
          <NavLink to="/profile">profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs">messages</NavLink>
        </li>
        <li>
          <NavLink to="/feed">news</NavLink>
        </li>
        <li>
          <NavLink to="/music">music</NavLink>
        </li>
        <li>
          <NavLink to="/users">find users</NavLink>
        </li>
        <li>
          <NavLink to="/settings"> settings</NavLink>
        </li>
      </ul>
      <div>
        <NavLink to="/friends">
          <br />
          friends:
        </NavLink>
        <div className={x.friend}>{props.friend}</div>
      </div>
    </nav>
  );
}
