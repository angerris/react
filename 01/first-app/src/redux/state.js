const ADD_POST = "ADD-POST";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_CHANGE = "UPDATE-MESSAGE-CHANGE";
let store = {
  _state: {
    profilePage: {
      newPostText: "",
      postsData: [
        { id: 1, message: "hi", likeCount: 0 },
        { id: 2, message: "wassup", likeCount: 2 },
      ],
    },
    messagesPage: {
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
    },
  },
  _rerenderEntireTree() {
    console.log("subscriber called");
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_POST_CHANGE) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_MESSAGE_CHANGE) {
      this._state.messagesPage.newMessageText = action.newMsg;
      this._rerenderEntireTree(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 4,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messageData.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._rerenderEntireTree(this._state);
    }
  },
};
export let addPostActionCreator = () => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  newText: text,
});
export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export let updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE_CHANGE,
  newMsg: text,
}); //return unnecessary
export default store;
window.store = store;
