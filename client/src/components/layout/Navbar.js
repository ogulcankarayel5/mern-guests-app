import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
        <div className="logo">
          <h1><i className="fas fa-glass-cheers"></i>Party RSVP</h1>
          <p>Made with by Ogulcan KARAYEL</p>
        </div>
        <ul>
          <li>Hello</li>
          <span className="sm-hide">|</span>
          <li>
            <a href="#!">
              <span className="sm-hide">Logout</span>
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
        
      </div>
    )
}
