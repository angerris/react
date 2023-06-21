import Profile from "./Profile";
import React from "react";
import { setProfile, getProfileThunk } from "../../redux/profileReducer";
import { connect } from "react-redux";
import withRouter from "../common/withRouter";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileThunk(this.props.router.params.profileId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}
function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
  };
}

export default compose(
  connect(mapStateToProps, { getProfileThunk, setProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
