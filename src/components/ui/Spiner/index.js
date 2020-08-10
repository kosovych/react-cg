import React from "react";

const Spiner = ({ className }) => (
  <div className="text-center">
    <div
      className={`spinner-border ${className || 'p-5'}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spiner;
