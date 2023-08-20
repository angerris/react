import Profile from "./Profile";
import React from "react";
import {
  setProfile,
  getProfileThunk,
  getStatusThunk,
  updateStatusThunk,
  savePhotoThunk,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import withRouter from "../common/withRouter";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Preloader from "../common/preloader/preloader";

class ProfileContainer extends React.Component {
  constructor() {
    super();
    this.profileState = {
      loading: true,
    };
  }
  refreshProfile = () => {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = 29349;
    }
    this.props.getProfileThunk(profileId);
    this.props.getStatusThunk(profileId);
  };
  componentDidMount() {
    this.profileState = { loading: false };
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.router.params.profileId !== prevProps.router.params.profileId
    ) {
      this.refreshProfile();
    }
  }
  render() {
    return this.profileState.loading ? (
      <Preloader />
    ) : (
      <Profile
        savePhoto={this.savePhotoThunk}
        isOwner={!this.props.router.params.profileId}
        {...this.props}
        updateStatus={this.updateStatusThunk}
      />
    );
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
    savePhotoThunk,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
