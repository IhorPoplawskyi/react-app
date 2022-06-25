import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField, maxLengthCreator } from "../../../utils/validators/validators";
import { Input } from "../../common/FromControl/FormContol";
const maxLength100 = maxLengthCreator(100);

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name="addMessageForm"
          type="text"
          validate={[requiredField, maxLength100]}
          placeholder="enter your message"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export const AddMessageReduxForm = reduxForm({form: 'addMessageText'})(addMessageForm);