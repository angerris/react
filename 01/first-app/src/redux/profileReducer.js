import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
const SET_STATUS = "SET-STATUS";
let initialState = {
  profile: {},
  newPostText: "",
  postsData: [
    { id: 1, message: "hi", likeCount: 0 },
    { id: 2, message: "wassup", likeCount: 2 },
  ],
  status: "",
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    return {
      ...state,
      postsData: [
        ...state.postsData,
        {
          id: 3,
          message: state.newPostText,
          likeCount: 0,
        },
      ],
      newPostText: "",
    };
  } else if (action.type === UPDATE_POST_CHANGE) {
    return { ...state, newPostText: action.newText };
  } else if (action.type === SET_PROFILE) {
    return { ...state, profile: action.profile };
  } else if (action.type === SET_STATUS) {
    return { ...state, status: action.status };
  }
  return state;
};
export let setProfile = (profile) => ({ type: SET_PROFILE, profile });
export let setStatus = (status) => ({ type: SET_STATUS, status });
export let addPostActionCreator = () => ({ type: ADD_POST });
export let onPostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  newText: text,
});
//thunk
export let getProfileThunk = (profileId) => {
  return (dispatch) => {
    if (!profileId) {
      profileId = 2;
    }
    profileAPI.getProfile(profileId).then((data) => {
      dispatch(setProfile(data));
    });
  };
};
export let getStatusThunk = (userID) => {
  return (dispatch) => {
    profileAPI.getStatus(userID).then((res) => {
      dispatch(setStatus(res.data));
    });
  };
};
export let updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
export default profileReducer;
