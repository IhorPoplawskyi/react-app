import { profileAPI } from "../../api/api";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initState = {
  posts: [
    { id: 1, text: "Hello world" },
    { id: 2, text: "Hello JavaScript" },
    { id: 3, text: "Im learning React" },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: `${Math.random()}`,
      text: action.newPostText,
      likesCount: 0,
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: ''
    }
  } else if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: action.profile
    }
  } else if (action.type === SET_USER_STATUS) {
    return {
      ...state,
      status: action.status
    }
  } else {
    return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const getUserProfile = (user) => {
  return (dispatch) => {
    profileAPI.getProfile(user).then(response => {
      dispatch(setUserProfile(response.data));
    })
  }
};

export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile};
};

export const getUserStatus = (user) => {
  return (dispatch) => {
    profileAPI.getStatus(user).then(response => {
      dispatch(setUserStatus(response.data));
    })
  }
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    })
  }
};

export const setUserStatus = (status) => {
  return {type: SET_USER_STATUS, status};
};

export default profileReducer;
