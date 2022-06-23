import React from "react";
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../redux/profileReducer";
import { connect } from "react-redux";
import {useLocation,useNavigate,useParams} from "react-router-dom";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let user = this.props.router.params.user;
    if (!user) {user = 2};
    this.props.getUserProfile(user);
    this.props.getUserStatus(user);
  }
  render = () => {
    return <Profile {...this.props} 
    profile={this.props.profile} 
    status={this.props.status} 
    updateUserStatus={this.props.updateUserStatus}/>;
  };
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,WithAuthRedirect)
(ProfileContainer)