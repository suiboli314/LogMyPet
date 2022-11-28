import React from "react";
// import { useState, useEffect } from "react";
import RecordForm from "../components/RecordForm";
// import { useNavigate } from "react-router-dom";

const CreateRecord = () => {
  return (
    <div className="d-flex justify-content-center container-fluid vh-100 background-gray-light create-pet">
      <div className="d-flex flex-column create-pet-field">
        <h1 className="create-pet-title">What do you want to reocrd today?</h1>
        <RecordForm />
      </div>
    </div>
  );
};

export default CreateRecord;
