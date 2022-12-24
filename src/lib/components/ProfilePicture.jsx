import React from "react";
import config from "../../config";

import profilePicture from "../../assets/me.png";

function ProfilePicture(props) {
  return (
    <div className="profile-picture text-center">
      <img src={profilePicture} alt={config.fullName} className="img-fluid" />
    </div>
  );
}

export default ProfilePicture;
