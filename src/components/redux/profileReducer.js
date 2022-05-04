const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initState = {
  posts: [
    { id: 1, text: "Hello world" },
    { id: 2, text: "Hello JavaScript" },
    { id: 3, text: "Im learning React" },
  ],
  newPostText: "",
};

const profileReducer = (state = initState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: `${Math.random()}`,
      text: state.newPostText,
      likesCount: 0,
    };
    let stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.posts.push(newPost);
    stateCopy.newPostText = "";
    return stateCopy;
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    let stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.newPostText = action.newText;
    return stateCopy;
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

export default profileReducer;
