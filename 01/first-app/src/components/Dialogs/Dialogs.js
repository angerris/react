import x from "./Dialogs.module.css";
import { Navigate } from "react-router-dom";
export default function Dialogs(props) {
  let dialogElement = props.dialogElement;
  let messageElement = props.messageElement;
  let newMessageText = props.newMessageText;
  if (props.isAuth === false) return <Navigate to={"/login"} />;

  let sendMessage = () => {
    props.sendMessage();
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateMessageText(text);
  };
  return (
    <div className={x.wrapper}>
      <div className={x.dialogWrapper}>{dialogElement}</div>
      <div className={x.msgWrapper}>
        {messageElement}
        <div className={x.text}>
          <textarea
            onChange={onMessageChange}
            value={newMessageText}
          ></textarea>
          <button onClick={sendMessage}>send!</button>
        </div>
      </div>
    </div>
  );
}
