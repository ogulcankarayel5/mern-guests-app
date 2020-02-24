import React from 'react'


const GuestForm = () => {
    return (
        <div className="invite-section">
        <h1>Invite Someone</h1>
        <form  >
          <input type="text" placeholder="Name" name="name"  />
          <input type="text" placeholder="Phone" name="phone"  />
          <p className="options-label">
            Dietary</p>
          <div className="options">
            <label class="container">Non-Veg
            <input type="radio" name="diet" value="Non-Veg"/>
              <span class="checkmark"></span>
            </label>
            <label class="container">Vegan
            <input type="radio" name="diet" value="vegan" />
              <span class="checkmark"></span>
            </label>
            <label class="container">Pescatarian
            <input type="radio" name="diet" value="Pesacatarian"/>
              <span class="checkmark"></span>
            </label>
          </div>
          <input type="submit" value="ADD GUEST" className="btn" />
          
        </form>
  
      </div>
    )
}

export default GuestForm
