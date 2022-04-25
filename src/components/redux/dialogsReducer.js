const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

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
  newMessageBody: "",
};

const dialogsReducer = (state = initState, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = "";
    state.messages.push({ id: 6, message: body });
  }

  return state;
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
