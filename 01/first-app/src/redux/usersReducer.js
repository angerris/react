const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  if (action.type === FOLLOW) {
    return {
      ...state,
      users: state.users.map((u) => {
        if (u.id === action.userID) {
          return { ...u, followed: true };
        }
        return u;
      }),
    };
  } else if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: state.users.map((u) => {
        if (u.id === action.userID) {
          return { ...u, followed: false };
        }
        return u;
      }),
    };
  } else if (action.type === SET_USERS) {
    return {
      ...state,
      users: [...state.users, ...action.users],
    };
  }
  return state;
};
export let followAC = (userID) => ({ type: FOLLOW, userID });
export let unfollowAC = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export let setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReducer;
