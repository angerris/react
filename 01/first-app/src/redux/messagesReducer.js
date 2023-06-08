const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_CHANGE = "UPDATE-MESSAGE-CHANGE";
const messageReducer = (state, action) => {
  if (action.type === UPDATE_MESSAGE_CHANGE) {
    state.newMessageText = action.newMsg;
  } else if (action.type === SEND_MESSAGE) {
    let newMessage = {
      id: 4,
      message: state.newMessageText,
    };
    state.messageData.push(newMessage);
    state.newMessageText = "";
  }
  return state;
};
export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export let updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE_CHANGE,
  newMsg: text,
});
export default messageReducer;
