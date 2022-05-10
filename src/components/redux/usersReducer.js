const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initState = {
    users: []
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
    } else {
        return state
    }
}

export const followAC = (userId) => {return {type: FOLLOW, userId}};
export const unfollowAC = (userId) => {return {type: UNFOLLOW, userId}};
export const setUsersAC = (users) => {return {type: SET_USERS, users}};

export default usersReducer;