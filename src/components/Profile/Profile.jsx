import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://i.pinimg.com/originals/47/5d/a9/475da9942fbe6f210286bab028556713.jpg'></img>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;