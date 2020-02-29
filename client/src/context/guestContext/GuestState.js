import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";
import { TOGGLE_FILTER,CLEAR_GUEST,SEARCH_GUEST,ADD_GUEST,REMOVE_GUEST,UPDATE_GUEST,EDIT_GUEST,CLEAR_EDIT} from "../types";
const GuestState = props => {
  const initialState = {
    filterGuest: false,
    search:null,
    editable:null,
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

  const editGuest = (guest) => {
    dispatch({
      type:EDIT_GUEST,
      payload:guest
    })
  }

  const clearEdit = () => {
    dispatch({
      type:CLEAR_EDIT,
      
    })
  }
  const removeGuest = (id) => {
    dispatch({
      type:REMOVE_GUEST,
      payload:id
    })
  }

  const updateGuest = (guest) => {
    dispatch({
      type:UPDATE_GUEST,
      payload:guest
    })
  }

  const addGuest = guest => {
    guest.id = Date.now();
    guest.isconfirmed=false;
    dispatch({
      type:ADD_GUEST,
      payload:guest,
    })
  }
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
          type:CLEAR_GUEST
      })
  }

  

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        search:state.search,
        editable:state.editable,
        toggleFilter,
        searchGuest,
        clearSearch,
        addGuest,
        removeGuest,
        updateGuest,
        editGuest,
        clearEdit
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
