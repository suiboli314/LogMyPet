import React from "react";

import PetProfile from "./PetProfile";

import "../../assets/styles/Colors.css";
import "../../assets/styles/PetSectionProfile.css";

function PetSectionProfile() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide col-6"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* profile starts here */}
          <div className="d-flex flex-column background-purple-light pet-section-profile">
            <span className="pet-section-title">Lilca profile</span>
            <span className="pet-section-description">
              He arrived home on November 1st, 2021
            </span>
            <PetProfile />
          </div>
          {/* profile ends here */}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default PetSectionProfile;
