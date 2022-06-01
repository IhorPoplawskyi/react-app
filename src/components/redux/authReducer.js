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

export const setAuthUserData = (id, email, login) => {return {type:SET_USER_DATA, data: {id, email, login}}} 

export default authReducer;