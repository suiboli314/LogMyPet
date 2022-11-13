import React from "react";

import RightPanelProfile from "../components/RightPanelProfile";

import "../assets/styles/Colors.css";
import "../assets/styles/RightPanel.css";
import rightPanelIllustration from "../assets/images/right-panel-illustration.png";

function RightPanel() {
  return (
    <div className="col-3 p-0 d-flex flex-column justify-content-between background-purple">
      <RightPanelProfile />
      <div>
        <img
          id="right-panel-illustration"
          src={rightPanelIllustration}
          alt="An illustration of a woman and a dog."
        />
      </div>
    </div>
  );
}

export default RightPanel;
