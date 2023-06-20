import { connect } from "react-redux";
import React from "react";
import {
  setToggleFetching,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
  toggleFollowingProgress,
  getUsersThunk,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

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
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
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
const usersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleFetching,
  toggleFollowingProgress,
  getUsersThunk,
})(UsersAPIComponent);
export default usersContainer;
