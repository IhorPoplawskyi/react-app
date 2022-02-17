import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Social network</div>
    </header>
  )
}

export default Header;