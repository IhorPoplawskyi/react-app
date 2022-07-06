import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initState = {
    initialized: false,
}

const appReducer = (state = initState, action) => {
    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: true,
        }
    } else {
        return state
    }
}

export const initSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initSuccess())
        })
}

export default appReducer;