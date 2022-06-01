import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  const defaultPhoto = 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png';
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/originals/47/5d/a9/475da9942fbe6f210286bab028556713.jpg" />
      </div>
      <div className={classes.descriptionBlock}>
        {<img src={props.profile.photos.large || defaultPhoto}/>}
      </div>
    </div>
  );
};

export default ProfileInfo;
