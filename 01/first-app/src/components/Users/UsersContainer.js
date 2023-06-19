import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import {
  setToggleFetching,
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setToggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,

        {
          withCredentials: true,
        }
      )
      .then((res) => {
        this.props.setToggleFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }
  onPageChanged = (p) => {
    this.props.setToggleFetching(true);
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,

        {
          withCredentials: true,
        }
      )
      .then((res) => {
        this.props.setToggleFetching(false);
        this.props.setUsers(res.data.items);
      });
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
  };
}
const usersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleFetching,
})(UsersAPIComponent);
export default usersContainer;
