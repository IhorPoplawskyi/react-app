import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Social network</div>
      <div className={classes.login}>
        {props.isAuth ? props.login : <NavLink className={classes.login} to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;