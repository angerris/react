import ComingSoon from "../common/comingSoon";

// import DialogsForm from "./DialogsForm";
export default function Dialogs(props) {
  // let sendMessage = () => {
  //   props.sendMessage();
  // };
  // let onMessageChange = (e) => {
  //   let text = e.target.value;
  //   props.updateMessageText(text);
  // };

  return (
    <div className={"dialogMainWrapper"}>
      {/* <div className={"dialogUsersWrapper"}>{props.dialogElement}</div>
      <div className={"messageWrapper"}>
        {props.messageElement}
        <div className="sendMessageWrapper">
          <DialogsForm
            {...props}
            onMessageChange={onMessageChange}
            sendMessage={sendMessage}
            className="sendMessageItem"
          />
        </div>
      </div> */}
      <ComingSoon />
    </div>
  );
}
