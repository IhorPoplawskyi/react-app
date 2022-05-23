import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from './../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/originals/47/5d/a9/475da9942fbe6f210286bab028556713.jpg" />
      </div>
      <div className={classes.descriptionBlock}>
        {<img src={props.profile.data[2].avatar}/>}
      </div>
    </div>
  );
};

export default ProfileInfo;
