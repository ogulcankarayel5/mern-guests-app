import React, { useState, useContext, useEffect } from "react";
import GuestContext from "../../context/guestContext/GuestContext";

const GuestForm = () => {
  const { addGuest, editable,updateGuest,clearEdit } = useContext(GuestContext);
  useEffect(() => {
    if (editable !== null) {
      setGuest(editable);
    } else {
      setGuest({
        name: "",
        phone: "",
        dietary: "Non-Veg"
      });
    }
  }, [editable]);
  const [guest, setGuest] = useState({
    name: "",
    phone: "",
    dietary: "Non-Veg"
  });

  const { name, phone, dietary } = guest;

  const handleChange = e => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if(editable !== null ){
      updateGuest(guest);
      clearEdit()
    }
   else{
    addGuest(guest);
    setGuest({
      name: "",
      phone: "",
      dietary: "Non-Veg"
    });
   }
  };
  return (
    <div className="invite-section">
      <h1>{editable !==null ? 'Edit Guest' : 'Invite Someone'}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label class="container">
            Non-Veg
            <input
              type="radio"
              name="dietary"
              value="Non-Veg"
              checked={dietary === "Non-Veg"}
              onChange={handleChange}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Vegan
            <input
              type="radio"
              name="dietary"
              value="Vegan"
              onChange={handleChange}
              checked={dietary === "Vegan"}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Pescatarian
            <input
              type="radio"
              name="dietary"
              value="Pesacatarian"
              onChange={handleChange}
              checked={dietary === "Pesacatarian"}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <input type="submit" value={editable !==null ? 'Edit Guest' : 'Add Guest'} className="btn" />
        {editable !==null ? <input value="Cancel" onClick={clearEdit} type="button" className="btn clear"/>:null}
      </form>
    </div>
  );
};

export default GuestForm;
