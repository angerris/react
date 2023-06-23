import Profile from "./Profile";
import React from "react";
import {
  setProfile,
  getProfileThunk,
  getStatusThunk,
  updateStatusThunk,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import withRouter from "../common/withRouter";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = 2;
    }
    this.props.getProfileThunk(profileId);
    this.props.getStatusThunk(profileId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
}

export default compose(
  connect(mapStateToProps, {
    getProfileThunk,
    setProfile,
    getStatusThunk,
    updateStatusThunk,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
