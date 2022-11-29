import React from "react";

import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

const Homepage = () => {
  return (
    <div>
      <div className="container-fluid vh-100 p-0">
        <div className="d-flex h-100">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
