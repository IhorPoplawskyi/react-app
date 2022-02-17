import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import classes from './Friends.module.css'

const Friends = (props) => {
  const friendElement = props.friends.map(friend => {
    return <FriendItem name={friend.name}/>
  });

  return (
    <div className={classes.friendsBlock}>
      {friendElement}
    </div>
  )
}

export default Friends;