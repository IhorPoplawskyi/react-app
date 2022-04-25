const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
          id: `${Math.random()}`,
          text: state.newPostText,
          likesCount: 0,
        };
      
        state.posts.push(newPost);
        state.newPostText = '';
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
      }

    return state;
}

export const addPostActionCreator = () => { return {type: ADD_POST}}
export const updateNewPostText = (text) => {return {type: UPDATE_NEW_POST_TEXT, newText: text}}

export default profileReducer;