import x from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export function DialogItem(props) {
  let path = `/dialogs/` + props.id;
  return (
    <div className={x.dialogs}>
      <div className={x.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
}
export function Messages(props) {
  return (
    <div className={x.messages}>
      <div className={x.message}>{props.message}</div>
    </div>
  );
}
export default function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: "anton" },
    { id: 2, name: "valera" },
    { id: 3, name: "sasha" },
  ];
  let messageData = [
    { id: 1, message: "wassup" },
    { id: 2, message: "yo" },
    { id: 3, message: "hows your day" },
  ];
  return (
    <div className={x.wrapper}>
      <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      <Messages message={messageData[0].message} />
      <Messages message={messageData[1].message} />
      <Messages message={messageData[2].message} />
    </div>
  );
}
