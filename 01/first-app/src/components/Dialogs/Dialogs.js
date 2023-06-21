import x from "./Dialogs.module.css";
export default function Dialogs(props) {
  let sendMessage = () => {
    props.sendMessage();
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateMessageText(text);
  };
  return (
    <div className={x.wrapper}>
      <div className={x.dialogWrapper}>{props.dialogElement}</div>
      <div className={x.msgWrapper}>
        {props.messageElement}
        <div className={x.text}>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
          ></textarea>
          <button onClick={sendMessage}>send!</button>
        </div>
      </div>
    </div>
  );
}
