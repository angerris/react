import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../redux/messagesReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import { Messages } from "./Message/Message";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
