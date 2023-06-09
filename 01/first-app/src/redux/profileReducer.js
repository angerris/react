const ADD_POST = "ADD-POST";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
let initialState = {
  newPostText: "",
  postsData: [
    { id: 1, message: "hi", likeCount: 0 },
    { id: 2, message: "wassup", likeCount: 2 },
  ],
};
//adding 'default' state bec its undefined yet
const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 3,
      message: state.newPostText,
      likeCount: 0,
    };
    state.postsData.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_POST_CHANGE) {
    state.newPostText = action.newText;
  }
  return state;
};
export let addPostActionCreator = () => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  newText: text,
});
export default profileReducer;
