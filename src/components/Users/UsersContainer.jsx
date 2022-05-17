import React from "react";
import Users from './Users'
import { connect } from "react-redux";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC} from './../redux/usersReducer'

const mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => {dispatch(followAC(userId))},
      unfollow: (userId) => {dispatch(unfollowAC(userId))},
      setUsers: (users) => {dispatch(setUsersAC(users))},
      setCurrentPageAC: (page) => {dispatch(setCurrentPageAC(page))}
    }
  }
  
  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
  
  export default UsersContainer;