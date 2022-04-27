import React from "react";
import Dialogs from "./Dialogs";
import {updateNewMessageBodyCreator, sendMessageCreator} from '../redux/dialogsReducer'

const DialogsContainer = (props) => {
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (<Dialogs onMessageChange={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={props.dialogsPage}/>);
};

export default DialogsContainer;
