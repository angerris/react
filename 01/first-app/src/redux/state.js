import messageReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._rerenderEntireTree(this._state);
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
