import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  const {state: {profilePage, dialogsPage, sitebar}} = props;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friends={sitebar.friends}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile store={props.store} posts={profilePage.posts} newPostText={profilePage.newPostText} 
              dispatch={props.dispatch} />}>
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer dialogsPage={dialogsPage} store={props.store}/>}></Route>
            <Route path="/news/*" element={<News />}></Route>
            <Route path="/music/*" element={<Music />}></Route>
            <Route path="/settings/*" element={<Settings/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
