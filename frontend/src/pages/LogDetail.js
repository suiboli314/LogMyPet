import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import UilAngleLeft from "@iconscout/react-unicons/icons/uil-angle-left-b";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import PetProfile from "../components/PetSection/PetProfile";

import "../assets/styles/Colors.css";
import "../assets/styles/Buttons.css";
import "../assets/styles/LogDetail.css";

const LogDetail = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [record, setRecord] = useState({});
  const [pet, setPet] = useState({});
  const [content, setNewContent] = useState({});
  const [editRecord, setEditRecord] = useState(false);

  const getRecord = async () => {
    const res = await fetch("/api/record/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      data[0].timestamp_day = moment(data.timestamp_day).format("MMM Do YYYY");
      data[0].category_name = data[0].category.name;
      setRecord(data[0]);
    } else {
      console.log(res.statusText);
    }
  };

  useEffect(() => {
    getRecord();
  }, []);

  const getPet = async () => {
    const res = await fetch("/api/pet/" + record.petId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      setPet(data[0]);
    } else {
      console.log(res.statusText);
    }
  };

  useEffect(() => {
    if (record.petId) {
      getPet();
    }
  }, [record.petId]);

  const changeRecord = () => {
    setEditRecord(true);
  };

  const handleEdit = async () => {
    const res = await fetch("/api/record/" + id, {
      method: "PUT",
      body: JSON.stringify({
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setEditRecord(false);
      navigate("/");
    } else {
      console.log(res.statusText);
    }
  };

  const handleDelete = async () => {
    const res = await fetch("/api/record/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      navigate("/");
    } else {
      console.log(res.statusText);
    }
  };

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="log-detail">
        <a
          href="/"
          className="d-inline-flex align-items-center log-detail-back-anchor"
        >
          <UilAngleLeft className="left-icon" size="20" />
          Back
        </a>
        <PetProfile
          name={pet.name}
          gender={pet.gender}
          weight={pet.weight}
          neuteredOrSpayed={pet.neuteredOrSpayed}
        />
        <div className="d-flex flex-column log-detail-edit">
          <div className="d-flex justify-content-between">
            <span className="log-detail-date">
              {record.timestamp_day ? (
                record.timestamp_day
              ) : (
                <Skeleton width="150px" />
              )}
            </span>
            <div>
              <img
                onClick={changeRecord}
                className="log-detail-icon"
                src={"https://assets.moveshanghai.com/logedit.png"}
              />
              <img
                onClick={handleDelete}
                className="log-detail-icon"
                src={"https://assets.moveshanghai.com/delete.png"}
              />
            </div>
          </div>
          {!editRecord && (
            <div className="log-detail-content background-purple-light">
              <div className="log-detail-title">Description</div>
              {record.category ? (
                <div className="log-detail-description">{`${record.category.name}: ${record.about}`}</div>
              ) : (
                <Skeleton width="150px" className="mt-3" />
              )}
            </div>
          )}
          {editRecord && (
            <textarea
              className="log-detail-content background-purple-light"
              onChange={(event) => {
                setNewContent(event.target.value);
              }}
            >
              {record.about}
            </textarea>
          )}
          {editRecord && (
            <div>
              <button
                className="small-button log-detail-edit-button purple-solid"
                onClick={handleEdit}
              >
                Save record
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

LogDetail.propTypes = {};

export default LogDetail;
