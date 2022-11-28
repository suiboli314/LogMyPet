import React from "react";
import PropTypes from "prop-types";

import "../../assets/styles/CreateRecord.css";

const RecordForm = ({ categories, pets }) => {
  return (
    <form>
      <div className="cr-group">
        {categories.map((category) => (
          <div className="cr-col" key={category._id}>
            <img className="cr-pic" src={category.imgUrl}></img>
            <div>{category.name}</div>
          </div>
        ))}
      </div>
      <div>
        {pets.map((pet) => (
          <div className="cr-col" key={pet._id}>
            <div>{pet.name}</div>
          </div>
        ))}
      </div>
    </form>
  );
};

RecordForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  pets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecordForm;
