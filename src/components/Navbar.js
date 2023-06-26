import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";


export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const handleCloseIcon = () => {
    setShowLinks(false) 
  }
  return (
    <>
      <div className="navBar">
        <div className="items">
          <h1 className="navBar-text">Palm Travellers</h1>
        </div>
        <div className="nav-list items">
          <ul className="ul-list">
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>community</li>
          </ul>
        </div>
        <div className="items">
          <FaBars
            className="bars-icon"
            onClick={() => setShowLinks(!showLinks)}
          />
        </div>
        <div className="items">
          <button className="signup-btn">Contact us</button>
        </div>
      </div>
      <section>
        <SideBar showLinks={showLinks} handleCloseIcon={handleCloseIcon} />
      </section>
    </>
  );
}
