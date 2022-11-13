import React from "react";

import RightPanel from "../components/RightPanel";

function Homepage() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-9"></div>
        <RightPanel />
      </div>
    </div>
  );
}

export default Homepage;
