import React,{useContext} from 'react'
import GuestContext from '../../context/guestContext/GuestContext';

import Guest from './Guest'
const Guests = () => {

    //state içindeki değer 
    const {guests,filterGuest,search} = useContext(GuestContext);
    console.log(!filterGuest);
    return (
        <div className="guests">
            {/* filterguest initial state içinde false,reducerda tam tersine döndüğü için burdada tersini alıyoruz
            eğer filtreleme inputuna tıklanmadıysa filterguest false olacak ve tüm guestleri gösterecek
            tıklandıysa true olacak ve sadece isconfirmed===true olanları gösterecek*/}
            {search !== null ? search.map(guest => <Guest key={guest.id} guest = {guest}/>) : guests.filter(guest => !filterGuest || guest.isconfirmed).map(guest => <Guest key={guest.id} guest={guest}/>)}
        </div>
    )
}

export default Guests
