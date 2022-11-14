import React from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

function Homepage() {
  return (
    <div className="container-fluid vh-100 p-0">
      <div className="d-flex h-100">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default Homepage;
