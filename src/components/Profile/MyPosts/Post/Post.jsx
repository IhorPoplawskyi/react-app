import React from 'react';
import classes from './Post.module.css'

const Post = () => {
  return (
    <div className={classes.item}>
      <div className={classes.avatar}>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png' alt='profile-picture'></img>
      </div>
      <div className={classes.text}>
        My first post!
      </div>
    </div>
  )
}

export default Post;