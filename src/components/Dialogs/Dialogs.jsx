import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

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

const addMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='addMessageForm' type='text' component='input' placeholder="enter your message"/>
      <button>Add post</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form: 'addMessageText'})(addMessageForm);

export default Dialogs;
