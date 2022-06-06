import { userAPI } from "../../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOOGLE_ISFETCHING = 'TOOGLE_ISFETCHING';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IN_PROGRESS = 'TOOGLE_IN_PROGRESS';

const initState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    inProgress: [],
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
        return {...state, users: [...action.users], ...state.totalUsersCount}
    } else if (action.type === SET_CURRENT_PAGE) {
        return {...state, currentPage: action.currentPage}
    } else if (action.type === TOOGLE_ISFETCHING) {
        return {
            ...state,
            isFetching: action.isFetching,
        }
    } else if (action.type === SET_TOTAL_USERS_COUNT) {
        return {...state, totalUsersCount: action.totalCount}
    } else  if (action.type === TOOGLE_IN_PROGRESS) {
        return {...state, inProgress: action.inProgress ? 
            [...state.inProgress, action.user] : 
            state.inProgress.filter(el => el != action.user)}
    } else {
        return state
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
      dispatch(toogleIsFetching(true));
      userAPI.getUsers(currentPage, pageSize).then((response) => {
        dispatch(toogleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount))
      });
    };
}

export const toogleInProgress = (inProgress, user) => {return {type: TOOGLE_IN_PROGRESS, inProgress, user}}
export const follow = (userId) => {return {type: FOLLOW, userId}};
export const unfollow = (userId) => {return {type: UNFOLLOW, userId}};
export const setUsers = (users) => {return {type: SET_USERS, users}};
export const setCurrentPage = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}};
export const toogleIsFetching = (isFetching) => {return {type: TOOGLE_ISFETCHING, isFetching}};
export const setTotalUsersCount = (totalCount) => {return {type:SET_TOTAL_USERS_COUNT, totalCount}} 

export default usersReducer;