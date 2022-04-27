import React from "react";
import MyPosts from "./MyPosts";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../redux/profileReducer';

const MyPostsContainer = (props) => {
  const state = props.store.getState().profilePage;

  const addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addNewPost} posts={state.posts} newPostText={state.newPostText}/>
  );
};

export default MyPostsContainer;
