import axios from "axios";
import Profile from "./Profile";
import React from "react";
import { setProfile } from "../../redux/profileReducer";
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
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
      .then((res) => {
        this.props.setProfile(res.data);
      });
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

const ProfileContainer = connect(mapStateToProps, { setProfile })(
  withRouter(ProfileAPIComponent)
);

export default ProfileContainer;
