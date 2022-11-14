import React from "react";

import PetSectionHeader from "./PetSectionHeader";
import PetSectionProfile from "./PetSectionProfile";
import PetSectionBehavior from "./PetSectionBehavior";

function PetSection() {
  return (
    <div className="d-flex flex-column">
      <PetSectionHeader />
      <div className="d-flex flex-xl-row flex-column justify-content-between">
        <PetSectionProfile />
        <PetSectionBehavior />
      </div>
    </div>
  );
}

export default PetSection;
