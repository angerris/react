import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_PROFILE = "SET-PROFILE";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
const SET_STATUS = "SET-STATUS";
const SET_PHOTO = "SET-PHOTO";

let initialState = {
  profile: {
    userId: "",
    photos: {
      large: "",
      small: "",
    },
  },
  newPostText: "",
  postsData: [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.",
      likeCount: 57,
    },
    { id: 1, message: "Lorem ipsum dolor sit amet.", likeCount: 82 },
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
  } else if (action.type === DELETE_POST) {
    return {
      ...state,

      postsData: [...state.postsData.filter((p) => p.id !== action.postId)],
    };
  } else if (action.type === SET_PHOTO) {
    return { ...state, profile: { ...state.profile, photos: action.file } };
  }
  return state;
};
export let setProfile = (profile) => ({ type: SET_PROFILE, profile });
export let setStatus = (status) => ({ type: SET_STATUS, status });
export let setPhoto = (file) => ({ type: SET_PHOTO, file });
export let addPostActionCreator = () => ({ type: ADD_POST });
export let deletePost = (postId) => ({ type: DELETE_POST, postId });
export let onPostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  newText: text,
});
//thunk
export let getProfileThunk = (profileId) => async (dispatch) => {
  const data = await profileAPI.getProfile(profileId);
  dispatch(setProfile(data));
};

export let getStatusThunk = (userID) => async (dispatch) => {
  const data = await profileAPI.getStatus(userID);
  dispatch(setStatus(data));
};

export let updateStatusThunk = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export let savePhotoThunk = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(setPhoto(data.data.photos));
  }
};

export default profileReducer;
