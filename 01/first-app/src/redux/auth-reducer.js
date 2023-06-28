import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const RESET_USER_DATA = "RESET-USER-DATA";
let initialState = {
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
    return {
      ...state,
      ...action.data,
      isAuth: true,
    };
  } else if (action.type === RESET_USER_DATA) {
    return {
      ...state,
      ...action.data,
      isAuth: false,
    };
  }
  return state;
};
//action creators
export let setAuthUserData = (email, login) => ({
  type: SET_USER_DATA,
  data: { email, login },
});
export let resetUserData = (email, login) => ({
  type: RESET_USER_DATA,
  data: { email, login },
});
//thunk
export let getProfileThunk = () => {
  return (dispatch) => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        let { email, login } = data.data;
        dispatch(setAuthUserData(email, login));
      }
    });
  };
};

export let loginThunk = (email, password, setError) => {
  return (dispatch) => {
    authAPI.login(email, password).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData());
      } else {
        setError("server", {
          type: "custom",
          message: "invalid e-mail or password",
        });
      }
    });
  };
};
export let logoutThunk = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(resetUserData(null, null));
      }
    });
  };
};
export default authReducer;
