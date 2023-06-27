import x from "./Dialogs.module.css";
import DialogsForm from "./DialogsForm";
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
          <DialogsForm
            {...props}
            onMessageChange={onMessageChange}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}
