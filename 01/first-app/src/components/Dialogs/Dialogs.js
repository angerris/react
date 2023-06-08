import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/state";
import { DialogItem } from "./DialogItem/DialogItem";
import x from "./Dialogs.module.css";
import { Messages } from "./Message/Message";

export default function Dialogs(props) {
  //props
  let dispatch = props.dispatch;
  let dialogsData = props.dialogsData;
  let messageData = props.messageData;
  let newMessageText = props.newMessageText;

  //friends in dialogs
  let dialogElement = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  //generate new message
  let messageElement = messageData.map((m) => <Messages message={m.message} />);

  //functions
  let sendMessage = () => {
    dispatch(sendMessageActionCreator());
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    dispatch(updateMessageActionCreator(text));
  };
  return (
    <div className={x.wrapper}>
      <div className={x.dialogWrapper}>{dialogElement}</div>
      <div className={x.msgWrapper}>
        {messageElement}
        <div className={x.text}>
          <textarea
            cols="30"
            rows="2"
            onChange={onMessageChange}
            value={newMessageText}
          ></textarea>
          <button onClick={sendMessage}>send!</button>
        </div>
      </div>
    </div>
  );
}
