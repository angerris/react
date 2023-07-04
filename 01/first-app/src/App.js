import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Provider, connect } from "react-redux";
import { initAppThunk } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/reduxStore";

class App extends React.Component {
  componentDidMount() {
    this.props.initAppThunk();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <>
        <HeaderContainer />
        <div className="wrapper">
          <NavbarContainer />
          <div className="routes">
            <Routes>
              <Route
                path="/profile/:profileId?"
                element={<ProfileContainer />}
              />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<FriendsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const AppContainer = connect(mapStateToProps, { initAppThunk })(App);
const ReactApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default ReactApp;
