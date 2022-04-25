import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from './../../redux/profileReducer';

const MyPosts = (props) => {
  
  const posts = props.posts.map(post => {
    return <Post text={post.text} />
  })

  const newPostElement = React.createRef();

  const addNewPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostText(text));
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <button onClick={addNewPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;
