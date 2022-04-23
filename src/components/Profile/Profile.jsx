import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;