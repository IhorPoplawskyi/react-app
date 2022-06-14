import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {
  const state = props.dialogsPage;
  const dialogElements = state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  })

  const messageElements = state.messages.map(element => {
    return <Message message = {element.message} key={element.id}/>
  })

  const onSendMessageClick = () => {
    props.sendMessage()
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.onMessageChange(body)
  }

  let newMessageBody = state.newMessageBody;

  if (props.isAuth === false) return <Navigate to={'/login'}/>

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
