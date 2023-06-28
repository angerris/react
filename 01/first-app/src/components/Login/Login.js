import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth-reducer";

const LoginInner = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <LoginForm loginThunk={props.loginThunk} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const Login = connect(mapStateToProps, { loginThunk })(LoginInner);
export default Login;
