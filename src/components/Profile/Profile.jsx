import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;