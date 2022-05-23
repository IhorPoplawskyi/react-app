const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initState = {
  posts: [
    { id: 1, text: "Hello world" },
    { id: 2, text: "Hello JavaScript" },
    { id: 3, text: "Im learning React" },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: `${Math.random()}`,
      text: state.newPostText,
      likesCount: 0,
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: ''
    }
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    return {
      ...state,
      newPostText: action.newText,
    }
  } else if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: action.profile
    }
  } else {
    return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile};
};

export default profileReducer;
