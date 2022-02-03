import React from 'react';
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
      <div>
        My Posts
        <div>
          New post
        </div>
        <div className={classes.posts}>
          <div className='item'>post 1</div>
          <div className='item'>post 2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;