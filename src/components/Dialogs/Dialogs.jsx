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
  ]


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name='Ihor' id='1'/>
        <DialogItem name='Vova' id='2' />
        <DialogItem name='Andriy' id='3' />
        <DialogItem name='Anatoliy' id='4' />
        <DialogItem name='Oksana' id='5' />
        <DialogItem name='Nazar' id='6' />
      </div>
      <div className={classes.messages}>
        <Message message='Hello world'/>
        <Message message='Hello JavaScript' />
      </div>
    </div>
  );
};

export default Dialogs;
