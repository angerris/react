import { connect } from "react-redux";
import UsersC from "./UsersC";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
}
const usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);
export default usersContainer;
