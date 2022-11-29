import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

import "../../assets/styles/Colors.css";
import "../../assets/styles/PetProfile.css";
import petProfile from "../../assets/images/pet-profile.png";

const PetProfile = ({ name, gender, weight, neuteredOrSpayed }) => (
  <div className="d-flex align-items-center">
    <div>
      <img
        src={petProfile}
        className="pet-profile-pic"
        alt="A example pic for pet profile."
      ></img>
    </div>
    <div className="d-flex flex-column">
      {name === undefined ? (
        <Skeleton width="100px" />
      ) : (
        <span className="pet-profile-title">{name}</span>
      )}
      <div className="pet-profile-description">
        {gender === undefined ? (
          <Skeleton width="100px" className="mt-4" />
        ) : (
          <Fragment>
            <span>{gender}</span>
            <span>{weight}</span>
            {neuteredOrSpayed && (
              <span>{gender === "Male" ? "Neutered" : "Spayed"}</span>
            )}{" "}
          </Fragment>
        )}
      </div>
    </div>
  </div>
);

PetProfile.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  weight: PropTypes.string,
  neuteredOrSpayed: PropTypes.bool,
};

export default PetProfile;
