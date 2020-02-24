import React from 'react'

const Guest = () => {
    return (
        <div class="guest-card">
        <div class="card-head">
          <div >
            <label >Confirmed
              <i className='fas fa-check-square'><input type="checkbox"  /> </i>
            </label>
          </div>
          <div>
            <button title="Edit Guest"><i class="fas fa-user-edit" ></i></button>
            <button title="Remove Guest"><i class="fas fa-trash-alt remove"></i></button>
          </div>
        </div>
        <div class="card-body">
          <h2>deneme</h2>
          <span className="badge red">deneme</span>
          <div class="contact">
            <i class="fas fa-phone-alt"></i>
            <p>deneme</p>
          </div>
        </div>
      </div>
    )
}

export default Guest
