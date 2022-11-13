import React from "react";

import PetSection from "./PetSection";

import "../assets/styles/LeftPanel.css";

function LeftPanel() {
  return (
    <div className="col-9 d-flex flex-column left-panel">
      <PetSection />
    </div>
  );
}

export default LeftPanel;
