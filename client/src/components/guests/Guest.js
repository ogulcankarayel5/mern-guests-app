import React from 'react'

const Guest = ({guest}) => {

   const {name,phone,dietary,isconfirmed} = guest;
    return (
        <div class="guest-card">
        <div class="card-head">
          <div >
            <label className={`${isconfirmed && 'confirm'}`}>Confirmed
              <i className={`fas fa-check-square ${isconfirmed && 'confirm'}`}><input type="checkbox"/> </i>
            </label>
          </div>
          <div>
            <button title="Edit Guest"><i class="fas fa-user-edit" ></i></button>
            <button title="Remove Guest"><i class="fas fa-trash-alt remove"></i></button>
          </div>
        </div>
        <div class="card-body">
          <h2>{name}</h2>
          <span className={'badge' + (dietary === 'Non-Veg' ? 'red' : dietary==='Vegan' ? 'green' : 'seaGreen')}>{dietary}</span>
          <div class="contact">
            <i class="fas fa-phone-alt"></i>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    )
}

export default Guest
