import {
  TOGGLE_FILTER,
  CLEAR_GUEST,
  SEARCH_GUEST,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  EDIT_GUEST,
  CLEAR_EDIT
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case UPDATE_GUEST:
      
      return {
        ...state,
        guests: state.guests.map(guest =>
          guest.id === payload.id ? payload : guest
        )
      };
    case EDIT_GUEST:
      
      return {
        ...state,
        editable: payload
      };
    case CLEAR_EDIT:
      return{
        ...state,
        editable:null
      }
    case REMOVE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(guest => guest.id !== payload)
      };
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, payload]
      };
    case SEARCH_GUEST:
      const reg = new RegExp(`${payload}`, "gi");
      return {
        ...state,
        search: state.guests.filter(guest => guest.name.match(reg))
      };
    case CLEAR_GUEST:
      return {
        ...state,
        search: null
      };
    case TOGGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest
      };

    default:
      return state;
  }
};
