import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator} from "../redux/dialogsReducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => {dispatch(sendMessageCreator(text))},
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs);