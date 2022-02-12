import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postData = [
    {id: 1, text: 'Hello world'},
    {id: 2, text: 'Hello JavaScript'},
    {id: 3, text: 'Im learning React'},
  ]

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post text={postData[0].text} />
        <Post text={postData[1].text} />
        <Post text={postData[2].text} />
      </div>
    </div>
  );
};

export default MyPosts;
