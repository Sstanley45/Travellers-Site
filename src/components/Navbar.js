import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navBar">
        <div>
          <h1 className="navBar-text">Palm Travellers</h1>
        </div>
        <div className="nav-list">
          <ul className="ul-list">
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>community</li>
          </ul>
        </div>
        <div>
          <button className="signup-btn">Contact us</button> 
        </div>
      </div>
    </>
  );
}
