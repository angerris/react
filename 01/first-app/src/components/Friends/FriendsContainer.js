import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    friends: state.messagesPage.dialogsData.map((f) => <div>{f.name}</div>),
  };
};

const FriendsContainer = connect(mapStateToProps)(Friends);
export default FriendsContainer;
