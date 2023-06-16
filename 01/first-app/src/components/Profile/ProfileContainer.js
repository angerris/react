import axios from "axios";
import Profile from "./Profile";
import React from "react";
import { setProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setProfile(res.data);
      });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}
function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
  };
}
const ProfileContainer = connect(mapStateToProps, { setProfile })(
  ProfileAPIComponent
);
export default ProfileContainer;
