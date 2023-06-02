import { NavLink } from "react-router-dom";
import x from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={x.nav}>
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
          <NavLink to="/settings">settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}
