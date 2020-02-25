import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";
import { TOGGLE_FILTER,CLEAR_GUEST,SEARCH_GUEST} from "../types";
const GuestState = props => {
  const initialState = {
    filterGuest: false,
    search:null,
    guests: [
      {
        id: 1,
        name: "Okan Kaya",
        phone: "3333",
        dietary: "Vegan",
        isconfirmed: false
      },
      {
        id: 2,
        name: "Engin Gündüz",
        phone: "3333",
        dietary: "Non-Veg",
        isconfirmed: true
      }
    ]
  };

  const [state, dispatch] = useReducer(GuestReducer, initialState);

  const toggleFilter = () => {
    dispatch({
      type: TOGGLE_FILTER
    });
  };

  const searchGuest = (guest) => {
      dispatch({
          type:SEARCH_GUEST,
          payload:guest
      })
  }

  const clearSearch = () => {
      dispatch({
          type:CLEAR_SEARCH
      })
  }

  

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        search:state.search,
        toggleFilter,
        searchGuest,
        clearSearch
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
