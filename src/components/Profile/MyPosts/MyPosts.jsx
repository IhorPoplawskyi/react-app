import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  
  const posts = props.posts.map(post => {
    return <Post text={post.text} key={post.id}/>
  })

  const onSubmit = (data) => {
    props.addPost(data.addPostText)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <AddPostReduxForm onSubmit={onSubmit}/>
      <div className={classes.posts}>
        {posts}
      </div>
    </div>
  );
};
 
const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='input' type='text' name='addPostText' placeholder="enter your post"/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm);

export default MyPosts;
