import { rerenderEntireTree } from "../../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, text: "Hello world" },
      { id: 2, text: "Hello JavaScript" },
      { id: 3, text: "Im learning React" },
    ],
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
};

export const addPost = (postMessage) => {
  let newPost = {
    id: `${Math.random()}`,
    text: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);

  rerenderEntireTree(state);
}

export default state;
