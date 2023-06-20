import Profile from "./Profile";
import React from "react";
import { setProfile, getProfileThunk } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    return <Component {...props} router={{ params }} />;
  }

  return ComponentWithRouterProp;
}
class ProfileAPIComponent extends React.Component {
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

const ProfileContainer = connect(mapStateToProps, {
  setProfile,
  getProfileThunk,
})(withRouter(ProfileAPIComponent));

export default ProfileContainer;
