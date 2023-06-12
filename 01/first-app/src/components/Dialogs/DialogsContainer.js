import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/messagesReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import { Messages } from "./Message/Message";

export default function DialogsContainer(props) {
  //props
  let dispatch = props.dispatch;
  let dialogsData = props.state.messagesPage.dialogsData;
  let messageData = props.state.messagesPage.messageData;
  let newMessageText = props.state.messagesPage.newMessageText;
  debugger;
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
  let onMessageChange = (text) => {
    dispatch(updateMessageActionCreator(text));
  };
  return (
    <Dialogs
      dialogElement={dialogElement}
      messageElement={messageElement}
      newMessageText={newMessageText}
      sendMessage={sendMessage}
      updateMessageText={onMessageChange}
    />
  );
}
