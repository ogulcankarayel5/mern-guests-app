import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import GuestState  from './context/guestContext/GuestState';


function App() {
  return (
   <GuestState>
     <div>
     <Navbar/>
     <Home/>
   </div>
   </GuestState>
  );
}

export default App;
