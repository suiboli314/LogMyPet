import React from "react";

import PetSection from "./PetSection";
import LogSection from "./LogSection";

import "../assets/styles/LeftPanel.css";

function LeftPanel() {
  return (
    <div className="col-9 d-flex flex-column left-panel">
      <PetSection />
      <LogSection />
    </div>
  );
}

export default LeftPanel;
