import React,{useContext} from 'react'
import GuestContext from '../../context/guestContext/GuestContext';

const Guest = ({guest}) => {
    const {removeGuest,updateGuest,editGuest} = useContext(GuestContext);
   const {id,name,phone,dietary,isconfirmed} = guest;

   const handleRemove = () => {
      removeGuest(id);
   }

   const handleIsConfirmed = () => {
     updateGuest({...guest,isconfirmed:!isconfirmed})
   }

   const handleEdit = () => {
     
      editGuest(guest)
   }
    return (
        <div class="guest-card">
        <div class="card-head">
          <div > 
            <label className={`${isconfirmed && 'confirm'}`}>Confirmed
              <i className={`fas fa-check-square ${isconfirmed && 'confirm'}` }><input onChange={handleIsConfirmed} type="checkbox"/> </i>
            </label>
          </div>
          <div>
            <button onClick={handleEdit} title="Edit Guest"><i class="fas fa-user-edit" ></i></button>
            <button onClick={handleRemove} title="Remove Guest"><i class="fas fa-trash-alt remove"></i></button>
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
