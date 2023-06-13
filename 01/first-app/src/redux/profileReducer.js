const ADD_POST = "ADD-POST";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
let initialState = {
  newPostText: "",
  postsData: [
    { id: 1, message: "hi", likeCount: 0 },
    { id: 2, message: "wassup", likeCount: 2 },
  ],
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 3,
      message: state.newPostText,
      likeCount: 0,
    };
    let stateCopy = { ...state };
    stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push(newPost);
    stateCopy.newPostText = "";
    return stateCopy;
  } else if (action.type === UPDATE_POST_CHANGE) {
    let stateCopy = { ...state, newPostText: action.newText };
    stateCopy.newPostText = action.newText;
    return stateCopy;
  }
  return state;
};
export let addPostActionCreator = () => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  newText: text,
});
export default profileReducer;
