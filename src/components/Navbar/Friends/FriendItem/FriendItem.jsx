import React from "react";
import classes from "./FriendItem.module.css";

const FriendItem = (props) => {
  return (
    <div className={classes.friendsNav}>
      <div className={classes.friendsNavAvatar}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png"
          alt="profile-picture"
        ></img>
      </div>
      <div className={classes.friendsNavName}>
        <div>{props.name}</div>
      </div>
    </div>
  );
};

export default FriendItem;
