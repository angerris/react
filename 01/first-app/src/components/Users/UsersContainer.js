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
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunk(currentPage, pageSize);
  }
  onPageChanged = (p) => {
    const { pageSize } = this.props;
    this.props.getUsersThunk(p, pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    setUsers,
    getUsersThunk,
    followThunk,
    unfollowThunk,
  })
)(UsersContainer);
