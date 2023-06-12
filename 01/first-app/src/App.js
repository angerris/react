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

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Navbar />
        <div className="routes">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
