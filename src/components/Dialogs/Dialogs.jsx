import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { AddMessageReduxForm } from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  const state = props.dialogsPage;
  const dialogElements = state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
  })

  const messageElements = state.messages.map(element => {
    return <Message message = {element.message} key={element.id}/>
  })

  const onSubmit = (data) => {
    props.sendMessage(data.addMessageForm)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
       {dialogElements}
      </div>
      <div className={classes.messages}>
        <div>{messageElements}</div>
        <div>
          <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
