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
    },
    sitebar: {
      friends: [
        { id: 1, name: "Ihor" },
        { id: 2, name: "Andriy" },
        { id: 3, name: "Aloha" },
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state chaged')
  },
  addPost() {
    let newPost = {
      id: `${Math.random()}`,
      text: this._state.profilePage.newPostText,
      likesCount: 0,
    };
  
    this._state.profilePage.posts.push(newPost);
    this.updateNewPostText('');
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}

window.state = store._state;

export default store;