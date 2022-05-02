import React from "react";
import Dialogs from "./Dialogs";
import {updateNewMessageBodyCreator,sendMessageCreator} from "../redux/dialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    sendMessage: () => {dispatch(sendMessageCreator())},
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
