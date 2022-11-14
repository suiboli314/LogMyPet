import React from "react";

import "../../assets/styles/Colors.css";
import "../../assets/styles/PetProfile.css";

function PetProfile() {
  return (
    <div className="d-flex align-items-center">
      <div>
        <div className="pet-profile-pic purple-solid"></div>
      </div>
      <div className="d-flex flex-column">
        <span className="pet-profile-title">Lilca</span>
        <div className="pet-profile-description">
          <span>Male</span>
          <span>5kg</span>
          <span>Neutralized</span>
        </div>
      </div>
    </div>
  );
}

export default PetProfile;
