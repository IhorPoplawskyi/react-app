const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 3,
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
        return {...state, users: [...state.users, ...action.users]}
        //тут мало би бути return {...state, users: [...action.users]}
    } else if ((action.type === SET_CURRENT_PAGE)) {
        return {...state, currentPage: action.currentPage}
    } else {
        return state
    }
}

export const followAC = (userId) => {return {type: FOLLOW, userId}};
export const unfollowAC = (userId) => {return {type: UNFOLLOW, userId}};
export const setUsersAC = (users) => {return {type: SET_USERS, users}};
export const setCurrentPageAC = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}};

export default usersReducer;