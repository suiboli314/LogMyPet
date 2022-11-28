import React from "react";
import { useState, useEffect } from "react";
import RadioGroup from "../PetInfoForm/RadioGroup";

import "../../assets/styles/CreateRecord.css";
import "../../assets/styles/RadioGroup.css";

const RecordForm = () => {
  const [categories, setCategories] = useState([]);
  // const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState("");

  useEffect(() => {
    async function getCategories() {
      const res = await fetch("/api/categories", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      } else {
        console.log(res.err);
      }
    }

    async function getPets() {
      const res = await fetch("/api/pets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // setPets(data);
      setSelectedPet(data[0].name);
    }

    getCategories();
    getPets();
  }, []);

  return (
    <form>
      <div className="cr-title">Category</div>
      <div className="cr-group">
        {categories.map((category) => (
          <div className="cr-col" key={category._id}>
            <img className="cr-pic" src={category.imgUrl}></img>
            <div>{category.name}</div>
          </div>
        ))}
      </div>
      <RadioGroup
        title="You are recording for?"
        options={["Lilca", "Bambi"]}
        value={selectedPet}
        setValue={(value) => {
          setSelectedPet(value);
        }}
      />
      <div className="cr-title">Record your observation</div>
      <textarea
        className="form-control"
        placeholder="Description"
        aria-label="Description"
      ></textarea>
      <div className="d-flex flex-column pet-info-form-button-section">
        <button
          type="submit"
          value="Submit"
          className="medium-button purple-solid pet-info-form-submit-button"
        >
          Create record
        </button>
      </div>
    </form>
  );
};

export default RecordForm;
