import React,{useContext} from "react";
import GuestContext from '../../context/guestContext/GuestContext';

const GuestFilter = () => {

  const {toggleFilter} = useContext(GuestContext);
  return (
    <div className="toggle">
      <label class="switch">
        <input type="checkbox" onChange={() => toggleFilter()}/>
        <span class="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
  );
};

export default GuestFilter;
