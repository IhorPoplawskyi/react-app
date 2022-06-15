import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {follow, unfollow, setCurrentPage, getUsers, toogleInProgress} from './../redux/usersReducer';
import Preloader from "../common/Preloader/Preloader";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber);
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
          toogleInProgress={this.props.toogleInProgress}
          inProgress={this.props.inProgress}
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
      inProgress: state.usersPage.inProgress,
    }
  }
  
  export default WithAuthRedirect(connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
  toogleInProgress,
})(UsersAPIComponent));