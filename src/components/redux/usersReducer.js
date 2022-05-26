import { userAPI } from "../../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOOGLE_ISFETCHING = 'TOOGLE_ISFETCHING';

const initState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 12,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: true}
                }
                return user;
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: false}
                }
                return user;
            })
        }
    } else if (action.type === SET_USERS) {
        return {...state, users: [...action.users]}
    } else if ((action.type === SET_CURRENT_PAGE)) {
        return {...state, currentPage: action.currentPage}
    } else if (action.type === TOOGLE_ISFETCHING) {
        return {
            ...state,
            isFetching: action.isFetching,
        }
    } else {
        return state
    }
}

export const getUsers = (currentPage) => {
    return (dispatch) => {
      dispatch(toogleIsFetching(true));
      userAPI(currentPage).then((response) => {
        dispatch(toogleIsFetching(false));
        dispatch(setUsers(response.data));
      });
    };
}

export const follow = (userId) => {return {type: FOLLOW, userId}};
export const unfollow = (userId) => {return {type: UNFOLLOW, userId}};
export const setUsers = (users) => {return {type: SET_USERS, users}};
export const setCurrentPage = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}};
export const toogleIsFetching = (isFetching) => {return {type: TOOGLE_ISFETCHING, isFetching}};

export default usersReducer;