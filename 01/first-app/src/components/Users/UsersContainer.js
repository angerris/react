import { connect } from "react-redux";
import React from "react";
import {
  setUsers,
  getUsersThunk,
  followThunk,
  unfollowThunk,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (p) => {
    this.props.getUsersThunk(p, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollowThunk={this.props.unfollowThunk}
            followThunk={this.props.followThunk}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
}

//callbacks from ac
const usersContainer = withAuthRedirect(
  connect(mapStateToProps, {
    setUsers,
    getUsersThunk,
    followThunk,
    unfollowThunk,
  })(UsersAPIComponent)
);
export default usersContainer;
