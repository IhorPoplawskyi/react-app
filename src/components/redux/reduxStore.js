import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sitebarReducer from './sitebarReducer';
import usersReducer from './usersReducer';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;