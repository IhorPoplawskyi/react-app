import "./App.css";
import React from "react";
import Nav from "./components/Navbar/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./components/redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render () {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav friends={this.props.state.friends}/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile/:user" element={<ProfileContainer/>}></Route>
              <Route path="/dialogs/*" element={<DialogsContainer/>}></Route>
              <Route path="/news/*" element={<News/>}></Route>
              <Route path="/music/*" element={<Music/>}></Route>
              <Route path="/settings/*" element={<Settings/>}></Route>
              <Route path='/users/*' element={<UsersContainer/>}></Route>
              <Route path='/login/*' element={<Login/>}></Route>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
