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
      axios
        .get(`https://reqres.in/api/users?page=${this.props.currentPage}`)
        .then((response) => {
          this.props.toogleIsFetching(false);
          this.props.setUsers(response.data.data);
        });
    }
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPageAC(pageNumber);
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((response) => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(response.data.data);
      });
  };
  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
        />{" "}
      </>
    );
  };
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
  
  const UsersContainer = connect(mapStateToProps, {
    follow: followAC, 
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPageAC: setCurrentPageAC,
    toogleIsFetching: setIsFetchingAC,
  })(UsersAPIComponent);
  
  export default UsersContainer;