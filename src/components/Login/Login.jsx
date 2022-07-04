import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {reduxForm, Field} from "redux-form";
import { requiredField, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FromControl/FormContol";
import { login } from "../redux/authReducer";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

const Login = (props) => {
  const submit = (formData) => {
    const {email, password, rememberMe} = formData;
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={'/profile/24253'} />
  }
    return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submit}/>
    </div>
  );
};

const maxLength40 = maxLengthCreator(40);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Input} validate={[requiredField, maxLength40]} name={'email'} placeholder="login"/>
          </div>
          <div>
            <Field component={Input} validate={[requiredField, maxLength40]} name={'password'} placeholder="password"/>
          </div>
          <div>
            <Field component={Input} name={'rememberMe'} type='checkbox'/> remember me
          </div>
          <div>
            <button>Log in</button>
          </div>
          {props.error && <div>{props.error}</div>}
      </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default connect(mapStateToProps, {login})(Login);
