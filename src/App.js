import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friends={props.state.friends}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer/>}></Route>
            <Route path="/dialogs/*" element={<DialogsContainer/>}></Route>
            <Route path="/news/*" element={<News />}></Route>
            <Route path="/music/*" element={<Music />}></Route>
            <Route path="/settings/*" element={<Settings/>}></Route>
            <Route path='/users/*' element={<UsersContainer/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
