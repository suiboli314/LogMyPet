import React from "react";

import "../../assets/styles/LogSectionTitle.css";

function LogSectionTitle() {
  return (
    <div className="d-flex align-items-center login-section-title">
      <div className="col-3">Category</div>
      <div className="col-2">Time</div>
      <div className="col-5">Note</div>
      <div>Status</div>
    </div>
  );
}

export default LogSectionTitle;
