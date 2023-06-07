import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

export default function App(props) {
  let state = props.state;
  let newPostText = state.profilePage.newPostText;
  let newMessageText = state.messagesPage.newMessageText;
  let dialogsData = state.messagesPage.dialogsData;
  let friendsData = state.messagesPage.dialogsData;
  let postsData = state.profilePage.postsData;
  let messageData = state.messagesPage.messageData;
  //functions
  let dispatch = props.dispatch;
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Navbar friendsData={friendsData} />
        <div className="routes">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  postsData={postsData}
                  dispatch={dispatch}
                  newPostText={newPostText}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dispatch={dispatch}
                  dialogsData={dialogsData}
                  messageData={messageData}
                  newMessageText={newMessageText}
                />
              }
            />
            <Route path="/feed" element={<Feed />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/friends"
              element={<Friends friendsData={friendsData} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
