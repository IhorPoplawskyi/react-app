const SEND_MESSAGE = "SEND-MESSAGE";

const initState = {
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
};

const dialogsReducer = (state = initState, action) => {
  if (action.type === SEND_MESSAGE) {
    return {
      ...state,
      newMessageBody: '',
      messages: [...state.messages, {id: Math.random(), message: action.messageText}]
    }
  } else {
    return state;
  }
};

export const sendMessageCreator = (messageText) => {
  return { type: SEND_MESSAGE, messageText};
};

export default dialogsReducer;
