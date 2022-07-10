import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {follow, unfollow, setCurrentPage, getUsers, toogleInProgress} from './../redux/usersReducer';
import Preloader from "../common/Preloader/Preloader";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";
import { pageSizeSelector, getUsersSelector, totalUsersCountSelector, currentPageSelector, isFetchingSelector, inProgressSelector } from "../redux/users-selectors";

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
      users: getUsersSelector(state),
      pageSize: pageSizeSelector(state),
      totalUsersCount: totalUsersCountSelector(state),
      currentPage: currentPageSelector(state),
      isFetching: isFetchingSelector(state),
      inProgress: inProgressSelector(state),
    }
  }
  
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
    toogleInProgress,
  }),
  WithAuthRedirect
)(UsersAPIComponent);