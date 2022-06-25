import React from "react";
import {reduxForm, Field} from "redux-form";
import { requiredField, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FromControl/FormContol";

const Login = (props) => {
  const submit = (formData) => {
    console.log(formData)
  }
    return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submit}/>
    </div>
  );
};

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Input} validate={[requiredField, maxLength20]} name={'login'} placeholder="login"/>
          </div>
          <div>
            <Field component={Input} validate={[requiredField, maxLength20]} name={'password'} placeholder="password"/>
          </div>
          <div>
            <Field component={Input} name={'rememberMe'} type='checkbox'/> remember me
          </div>
          <div>
            <button>Log in</button>
          </div>
      </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default Login;
