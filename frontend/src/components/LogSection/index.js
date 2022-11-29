import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import moment from "moment";
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";

import LogSectionTitle from "./LogSectionTitle";
import LogSectionItem from "./LogSectionItem";

import "../../assets/styles/Buttons.css";
import "../../assets/styles/LogSection.css";

const LogSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getRecords() {
      const res = await fetch(`/api/records?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        for (let i = 0; i < data.length; i++) {
          data[i].timestamp_day = moment(data[i].timestamp_day).format(
            "MMM Do YY"
          );
        }
        setRecords(data);
      } else {
        console.log(res.err);
      }
    }

    getRecords();
  }, []);

  const handleClick = () => {
    navigate("/createRecord");
  };

  return (
    <div className="d-flex flex-column log-section">
      <div className="d-flex justify-content-end">
        <button
          className="d-inline-flex align-items-center small-button log-section-add-record-button orange-solid"
          onClick={() => {
            handleClick();
          }}
        >
          <UilPlus className="plus-icon" size="20" />
          Add record
        </button>
      </div>
      <LogSectionTitle />
      <div className="d-flex flex-column position-relative log-section-items">
        {records.map((record) => (
          <LogSectionItem key={record._id} record={record} />
        ))}
      </div>
    </div>
  );
};

LogSection.propTypes = {};

export default LogSection;
