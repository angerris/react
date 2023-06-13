const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_CHANGE = "UPDATE-MESSAGE-CHANGE";
let initialState = {
  newMessageText: "",
  dialogsData: [
    { id: 1, name: "anton" },
    { id: 2, name: "valera" },
    { id: 3, name: "sasha" },
  ],
  messageData: [
    { id: 1, message: "wassup" },
    { id: 2, message: "yo" },
    { id: 3, message: "hows your day" },
  ],
};
const messageReducer = (state = initialState, action) => {
  if (action.type === UPDATE_MESSAGE_CHANGE) {
    let stateCopy = { ...state };
    stateCopy.newMessageText = action.newMsg;
    return stateCopy;
  } else if (action.type === SEND_MESSAGE) {
    let stateCopy = { ...state };
    let newMessage = {
      id: 4,
      message: state.newMessageText,
    };
    stateCopy.messageData.push(newMessage);
    stateCopy.newMessageText = "";
    return stateCopy;
  }
  return state;
};
export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export let updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE_CHANGE,
  newMsg: text,
});
export default messageReducer;
