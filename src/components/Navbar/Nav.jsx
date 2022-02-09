import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
        <div className={`${classes.nav} ${classes.active}`}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div>
          <NavLink to='/settings'>Settings</NavLink>
        </div>
      </nav>
  )
}

export default Nav;