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
    } else if (action.type === "UPDATE-MESSAGE-CHANGE") {
      console.log("updated");
    } else if (action.type === "SEND-MESSAGE") {
      console.log("sent");
    }
  },
};
export let addPostActionCreator = () => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  newText: text,
}); //return unnecessary
export default store;
window.store = store;
