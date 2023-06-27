import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getProfileThunk, logoutThunk } from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileThunk();
  }
  render() {
    return <Header {...this.props} />;
  }
}
function mapStateToProps(state) {
  return { isAuth: state.auth.isAuth, login: state.auth.login };
}
export default connect(mapStateToProps, { getProfileThunk, logoutThunk })(
  HeaderContainer
);
