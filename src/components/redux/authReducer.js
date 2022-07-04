import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initState, action) => {
  if (action.type === SET_USER_DATA) {
    return {
      ...state,
      ...action.data,
      isAuth: true
    };
  } else {
    return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => {return {type:SET_USER_DATA, data: {id, email, login, isAuth}}}
export const getAuthUserData = () => (dispatch) => {
  authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {  
  authAPI.loginMe(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      let message = response.data.messages
      console.log(response)
      dispatch(stopSubmit('login', {_error: message}));
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logoutMe().then(response => {
    if (response.resultCode === 0) {
      dispatch(getAuthUserData(null, null, null, null));
    }
  })
}

export default authReducer;