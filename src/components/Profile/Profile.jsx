import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer store={props.store} newPostText={props.newPostText} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;