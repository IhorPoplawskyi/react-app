import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postData = [
    {id: 1, text: 'Hello world'},
    {id: 2, text: 'Hello JavaScript'},
    {id: 3, text: 'Im learning React'},
  ]

  const array = postData.map(el => {
    return <Post text={el.text} />
  })

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
        {array}
      </div>
    </div>
  );
};

export default MyPosts;
