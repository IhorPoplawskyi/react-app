import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sitebarReducer from './sitebarReducer';

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
    dialogsPage: {
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sitebar = sitebarReducer(this._state.sitebar, action);

    this._callSubscriber(this._state);
  },
}

window.store = store;

export default store;
