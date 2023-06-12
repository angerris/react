import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    friend: state.messagesPage.dialogsData.map((f) => <div>{f.name}</div>),
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;
