import React from "react";
import {reduxForm, Field} from "redux-form";

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

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={'input'} name={'login'} placeholder="login"/>
          </div>
          <div>
            <Field component={'input'} name={'password'} placeholder="password"/>
          </div>
          <div>
            <Field component={'input'} name={'rememberMe'} type='checkbox'/> remember me
          </div>
          <div>
            <button>Log in</button>
          </div>
      </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default Login;
