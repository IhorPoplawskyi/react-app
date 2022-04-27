import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  const posts = props.posts.map(post => {
    return <Post text={post.text} />
  })

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea placeholder="Enter some text" onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
