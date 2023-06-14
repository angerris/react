const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      photoURL:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      fullName: "Dmitry",
      status: "hello",
      location: {
        city: "minsk",
        country: "belarus",
      },
    },
    {
      id: 2,
      followed: true,
      photoURL:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      fullName: "Sasha",
      status: "hello world",
      location: {
        city: "moscow",
        country: "russia",
      },
    },
    {
      id: 3,
      followed: false,
      photoURL:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      fullName: "Anton",
      status: "hello!!",
      location: {
        city: "kyiv",
        country: "ukraine",
      },
    },
  ],
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
