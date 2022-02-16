import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  const posts = props.posts.map(post => {
    return <Post text={post.text} />
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
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
