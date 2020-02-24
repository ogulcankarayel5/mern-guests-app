import React from "react";

const GuestFilter = () => {
  return (
    <div className="toggle">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
  );
};

export default GuestFilter;
