import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/messagesReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import { Messages } from "./Message/Message";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let authRedirectComponent = withAuthRedirect(Dialogs);
let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    dialogElement: state.messagesPage.dialogsData.map((d) => (
      <DialogItem name={d.name} id={d.id} />
    )),
    messageElement: state.messagesPage.messageData.map((m) => (
      <Messages message={m.message} />
    )),
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateMessageText: (text) => {
      dispatch(updateMessageActionCreator(text));
    },
  };
};
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(authRedirectComponent);
export default DialogsContainer;
