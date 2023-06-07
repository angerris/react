import { NavLink } from "react-router-dom";
import x from "./DialogItem.module.css";
import icon from "./icon.svg";

export function DialogItem(props) {
  let path = `/dialogs/` + props.id;
  return (
    <div className={x.dialogs}>
      <div className={x.dialog}>
        <img src={icon} alt="" width={45} />
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
}
