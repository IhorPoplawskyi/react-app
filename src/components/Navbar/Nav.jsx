import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Nav.module.css';

const setActive = ({isActive}) => isActive? classes.active : classes.inactive;
const setActiveFriends = ({isActive}) => isActive? classes.activeFriends : classes.inactiveFriends;

const Nav = (props) => {
  return (
    <nav className={classes.nav}>
        <div>
          <NavLink to='/profile' className={setActive}>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/news' className={setActive}>News</NavLink>
        </div>
        <div>
          <NavLink to='/music' className={setActive}>Music</NavLink>
        </div>
        <div>
          <NavLink to='/settings' className={setActive}>Settings</NavLink>
        </div>
        <div>
          <NavLink to='/users' className={setActive}>Users</NavLink>
        </div>
        <div>
          <NavLink to='/friends' className={setActiveFriends}>Friends</NavLink>
          <Friends friends={props.friends}/>
        </div>
      </nav>
  )
}

export default Nav;