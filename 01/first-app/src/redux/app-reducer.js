import { getProfileThunk } from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  if (action.type === SET_INITIALIZED) {
    return {
      ...state,
      initialized: true,
    };
  }
  return state;
};
//action creators
export let setInitialized = () => ({
  type: SET_INITIALIZED,
});

//thunk
export let initAppThunk = () => {
  return (dispatch) => {
    let promise = dispatch(getProfileThunk());
    Promise.all([promise]).then(() => {
      dispatch(setInitialized());
    });
  };
};

export default appReducer;
