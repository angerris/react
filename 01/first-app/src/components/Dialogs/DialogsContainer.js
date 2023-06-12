import StoreContext from "../../StoreContext";
import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/messagesReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import { Messages } from "./Message/Message";

export default function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let dialogElement = store
          .getState()
          .messagesPage.dialogsData.map((d) => (
            <DialogItem name={d.name} id={d.id} />
          ));
        let messageElement = store
          .getState()
          .messagesPage.messageData.map((m) => (
            <Messages message={m.message} />
          ));
        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };
        let onMessageChange = (text) => {
          store.dispatch(updateMessageActionCreator(text));
        };
        return (
          <Dialogs
            dialogElement={dialogElement}
            messageElement={messageElement}
            newMessageText={store.getState().messagesPage.newMessageText}
            sendMessage={sendMessage}
            updateMessageText={onMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
