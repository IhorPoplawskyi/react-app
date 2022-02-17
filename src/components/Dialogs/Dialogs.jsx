import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElements = props.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id}/>
  })

  const messageElements = props.messages.map(element => {
    return <Message message = {element.message}/>
  })

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
       {dialogElements}
      </div>
      <div className={classes.messages}>
        {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
