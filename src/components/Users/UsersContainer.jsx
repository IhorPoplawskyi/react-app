import React from "react";
import Users from "./Users";
import axios from "axios";
import { connect } from "react-redux";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setIsFetchingAC} from './../redux/usersReducer';
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
      if (this.props.users.length === 0) {
        this.props.toogleIsFetching(true);
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
          this.props.toogleIsFetching(false);  
          this.props.setUsers(response.data)});
      }
  }
  onPageChanged = (pageNumber) => {
      this.props.setCurrentPageAC(pageNumber);
      //axios.get('https://jsonplaceholder.typicode.com/users?page=${pageNumber}').then(response => this.props.setUsers(response.data));
      //тут я записав в строці запиту pageNumber, щоб отримувати саме ту потрібну нам сторінку, але у нас сервер не підтримує
      //такого запиту, тому він не працює. так само вказувати номер потрібно і в componentDidMount і брати його з
      //this.props.currentPage  + потрібно буде змінити в state при отриманні юзерів перезаписування нових старих юзерів на нових
      //так само на потрібно буде отримувати інфу від сервера про кількість юзерів і через редюсер, екшкріейтор передавати в стейт
  }
  render = () => {
    return <> 
    {this.props.isFetching ? <Preloader/> : null}
    <Users 
    users={this.props.users} 
    totalUsersCount={this.props.totalUsersCount} 
    pageSize={this.props.pageSize} 
    currentPage={this.props.currentPage} 
    unfollow={this.props.unfollow} 
    follow={this.props.follow} 
    onPageChanged={this.onPageChanged}
    /> </>}

}

const mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      follow: (userId) => {dispatch(followAC(userId))},
      unfollow: (userId) => {dispatch(unfollowAC(userId))},
      setUsers: (users) => {dispatch(setUsersAC(users))},
      setCurrentPageAC: (page) => {dispatch(setCurrentPageAC(page))},
      toogleIsFetching: (isFetching) => {dispatch(setIsFetchingAC(isFetching))}
    }
  }
  
  const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
  
  export default UsersContainer;