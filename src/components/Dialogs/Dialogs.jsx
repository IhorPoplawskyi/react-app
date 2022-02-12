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

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={classes.messages}>
        <Message message = {messagesData[0].message}/>
        <Message message = {messagesData[1].message} />
        <Message message = {messagesData[2].message} />
        <Message message = {messagesData[3].message} />
        <Message message = {messagesData[4].message} />
        <Message message = {messagesData[5].message} />
      </div>
    </div>
  );
};

export default Dialogs;
