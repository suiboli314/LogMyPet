import React from "react";

import PetSectionBehaviorItem from "./PetSectionBehaviorItem";

// import "../assets/styles/PetSectionBehavior.css";

function PetSectionBehavior() {
  return (
    <div className="col-6 d-flex flex-column align-items-end">
      <PetSectionBehaviorItem />
      <PetSectionBehaviorItem />
      <PetSectionBehaviorItem />
    </div>
  );
}

export default PetSectionBehavior;
