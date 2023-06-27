const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_CHANGE = "UPDATE-MESSAGE-CHANGE";
let initialState = {
  dialogsData: [
    { id: 1, name: "anton" },
    { id: 2, name: "valera" },
    { id: 3, name: "sasha" },
  ],
  messageData: [],
};
const messageReducer = (state = initialState, action) => {
  if (action.type === UPDATE_MESSAGE_CHANGE) {
    return { ...state, newMessageText: action.newMsg };
  } else if (action.type === SEND_MESSAGE) {
    return {
      ...state,
      newMessageText: "",
      messageData: [
        ...state.messageData,
        {
          id: 4,
          message: state.newMessageText,
        },
      ],
    };
  }
  return state;
};
export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export let updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE_CHANGE,
  newMsg: text,
});
export default messageReducer;
