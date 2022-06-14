import React from "react";
import Profile from "./Profile";
import { getUserProfile } from "../redux/profileReducer";
import { connect } from "react-redux";
import {useLocation,useNavigate,useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let user = this.props.router.params.user;
    if (!user) {user = 2};
    this.props.getUserProfile(user);
  }
  render = () => {
    return <Profile {...this.props} profile={this.props.profile}/>;
  };
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
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

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));
