import { DialogItem } from "./DialogItem/DialogItem";
import x from "./Dialogs.module.css";
import { Messages } from "./Message/Message";
import React, { useRef } from "react";

export default function Dialogs(props) {
  //props
  let dialogsData = props.dialogsData;
  let messageData = props.messageData;
  //friends in dialogs
  let dialogElement = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  //generate new message
  let messageElement = messageData.map((m) => <Messages message={m.message} />);
  //ref
  let msgText = useRef(null);
  //functions
  let sendMessage = () => {
    alert("message sent");
  };
  let onMessageChange = () => {
    let text = msgText.current.value;
    console.log(text);
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
            ref={msgText}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={sendMessage}>send!</button>
        </div>
      </div>
    </div>
  );
}
