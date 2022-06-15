import React from "react";
import Dialogs from "./Dialogs";
import {updateNewMessageBodyCreator,sendMessageCreator} from "../redux/dialogsReducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (body) => {dispatch(updateNewMessageBodyCreator(body))},
    sendMessage: () => {dispatch(sendMessageCreator())},
  }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
