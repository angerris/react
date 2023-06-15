const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
      users: [...action.users],
    };
  } else if (action.type === SET_CURRENT_PAGE) {
    return {
      ...state,
      currentPage: action.currentPage,
    };
  } else if (action.type === TOTAL_USERS_COUNT) {
    return {
      ...state,
      totalUsersCount: action.count,
    };
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.isFetching,
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
export let setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export let setTotalUsersCountAC = (count) => ({
  type: TOTAL_USERS_COUNT,
  count,
});
export let SetToggleFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export default usersReducer;
