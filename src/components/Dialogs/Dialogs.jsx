import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator, sendMessageCreator} from './../redux/dialogsReducer'

const Dialogs = (props) => {
  const state = props.store._state.dialogsPage;
  const dialogElements = state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id}/>
  })

  const messageElements = state.messages.map(element => {
    return <Message message = {element.message}/>
  })

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  let newMessageBody = state.newMessageBody;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
       {dialogElements}
      </div>
      <div className={classes.messages}>
        <div>{messageElements}</div>
        <div>
          <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="enter your message"></textarea></div>
          <div><button onClick={onSendMessageClick}>send message</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
