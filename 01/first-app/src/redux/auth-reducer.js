import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET-USER-DATA";
const RESET_USER_DATA = "auth/RESET-USER-DATA";

let initialState = {
  id: null,
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
export let setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});
export let resetUserData = (id, email, login) => ({
  type: RESET_USER_DATA,
  data: { id, email, login },
});
//thunk
export let getProfileThunk = () => async (dispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export let loginThunk = (id, email, password, setError) => async (dispatch) => {
  const data = await authAPI.login(id, email, password);
  if (data.resultCode === 0) {
    dispatch(setAuthUserData());
  } else {
    setError("server", {
      type: "custom",
      message: "invalid e-mail or password",
    });
  }
};
export let logoutThunk = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(resetUserData(null, null, null));
  }
};
export default authReducer;
