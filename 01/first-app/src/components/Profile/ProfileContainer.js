import Profile from "./Profile";
import React from "react";
import { setProfile, getProfileThunk } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

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
    if (this.props.isAuth === false) {
      return <Navigate to={"/login"} />;
    }
    return <Profile {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
}

const ProfileContainer = connect(mapStateToProps, {
  setProfile,
  getProfileThunk,
})(withRouter(ProfileAPIComponent));

export default ProfileContainer;
