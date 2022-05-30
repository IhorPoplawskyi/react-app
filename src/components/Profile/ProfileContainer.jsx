import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "../redux/profileReducer";
import { userAPI } from "../../api/api";
import { connect } from "react-redux";
import {useLocation,useNavigate,useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let user = this.props.router.params.user;
    if (!user) {user = 2};
    userAPI.getProfile(user).then(response => {
      this.props.setUserProfile(response.data)
    })
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
