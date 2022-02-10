import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/originals/47/5d/a9/475da9942fbe6f210286bab028556713.jpg" />
      </div>
      <div className={classes.descriptionBlock}>Hello! My name is Ihor! I'm Studying REACT</div>
    </div>
  );
};

export default ProfileInfo;
