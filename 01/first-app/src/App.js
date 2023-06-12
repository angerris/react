import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export default function App(props) {
  let state = props.state;
  let dispatch = props.dispatch;
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Navbar state={state} />
        <div className="routes">
          <Routes>
            <Route
              path="/profile"
              element={<Profile dispatch={dispatch} state={state} />}
            />
            <Route
              path="/dialogs"
              element={<DialogsContainer dispatch={dispatch} state={state} />}
            />
            <Route path="/feed" element={<Feed />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends state={state} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
