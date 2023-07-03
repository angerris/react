import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
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
  } else if (action.type === TOGGLE_IS_FOLLOWING) {
    return {
      ...state,
      followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userID]
        : [...state.followingInProgress.filter((id) => id !== action.userID)],
    };
  }
  return state;
};
//action creators
export let follow = (userID) => ({ type: FOLLOW, userID });
export let unfollow = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export let setTotalUsersCount = (count) => ({
  type: TOTAL_USERS_COUNT,
  count,
});
export let setToggleFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export let toggleFollowingProgress = (isFetching, userID) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFetching,
  userID,
});
//thunk
export let getUsersThunk = (page, pageSize) => async (dispatch) => {
  dispatch(setToggleFetching(true));
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(setCurrentPage(page));
  dispatch(setToggleFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export let followThunk = (userID) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userID));
  const data = await usersAPI.followUsers(userID);
  if (data.resultCode === 0) {
    dispatch(follow(userID));
  }
  dispatch(toggleFollowingProgress(false, userID));
};

export let unfollowThunk = (userID) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userID));
  const data = await usersAPI.unfollowUsers(userID);
  if (data.resultCode === 0) {
    dispatch(unfollow(userID));
  }
  dispatch(toggleFollowingProgress(false, userID));
};

export default usersReducer;
