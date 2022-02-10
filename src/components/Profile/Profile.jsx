import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;