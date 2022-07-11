import { createSelector } from "reselect"

export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const pageSizeSelector = (state) => {
    return state.usersPage.pageSize
}

export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}

export const currentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const inProgressSelector = (state) => {
    return state.usersPage.inProgress
}