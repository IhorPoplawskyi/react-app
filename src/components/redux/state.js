const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "Hello world" },
        { id: 2, text: "Hello JavaScript" },
        { id: 3, text: "Im learning React" },
      ],
      newPostText: '',
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Ihor" },
        { id: 2, name: "Vova" },
        { id: 3, name: "Andriy" },
        { id: 4, name: "Anatoliy" },
        { id: 5, name: "Oksana" },
        { id: 6, name: "Nazar" },
      ],
      messages: [
        { id: 1, message: "Hello world" },
        { id: 2, message: "Hello JavaScript" },
        { id: 3, message: "Aloha" },
        { id: 4, message: "Nihao" },
        { id: 5, message: "Namaste" },
        { id: 6, message: "Pryvit!" },
      ],
      newMessageBody: '',
    },
    sitebar: {
      friends: [
        { id: 1, name: "Ihor" },
        { id: 2, name: "Andriy" },
        { id: 3, name: "Aloha" },
      ]
    }
  },
  _callSubscriber() {
    console.log('abobus');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: `${Math.random()}`,
        text: this._state.profilePage.newPostText,
        likesCount: 0,
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messages.push({id:6, message: body})
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}

export const updateNewPostText = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const sendMessageCreator = () => {
  return {type: SEND_MESSAGE}
}

export const updateNewMessageBodyCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

window.store = store;

export default store;
