import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  const defaultPhoto = 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png';
  return (
    <div>
      <div className={classes.descriptionBlock}>
      <div className={classes.nameBlock}>{props.profile.fullName}</div>
        {<img src={props.profile.photos.large || defaultPhoto}/>}
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
