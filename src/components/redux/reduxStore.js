import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sitebarReducer from './sitebarReducer';
import usersReducer from './usersReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: sitebarReducer,
    usersPage: usersReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;