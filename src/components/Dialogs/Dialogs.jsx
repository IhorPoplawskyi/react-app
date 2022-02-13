import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
          <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={classes.dialog}>{props.message}</div>
  )
}

const Dialogs = () => {
  const dialogsData = [
    {id: 1, name: 'Ihor'},
    {id: 2, name: 'Vova'},
    {id: 3, name: 'Andriy'},
    {id: 4, name: 'Anatoliy'},
    {id: 5, name: 'Oksana'},
    {id: 6, name: 'Nazar'},
  ];

  const messagesData = [
    {id: 1, message: 'Hello world'},
    {id: 2, message: 'Hello JavaScript'},
    {id: 3, message: 'Aloha'},
    {id: 4, message: 'Nihao'},
    {id: 5, message: 'Namaste'},
    {id: 6, message: 'Pryvit!'},
  ]

  const dialogElements = dialogsData.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id}/>
  })

  const messageElements = messagesData.map(element => {
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
