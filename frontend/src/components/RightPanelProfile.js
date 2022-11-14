import React from "react";

import "../assets/styles/RightPanelProfile.css";
import "../assets/styles/Buttons.css";

function RightPanelProfile() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <div className="right-pane-title">My profile</div>
      <div className="right-pane-profile-pic purple-solid"></div>
      <div className="right-pane-user-name">Jasmine</div>
      <button className="small-button right-pane-edit-profile-button purple-solid">Edit profile</button>
    </div>
  );
}

export default RightPanelProfile;
