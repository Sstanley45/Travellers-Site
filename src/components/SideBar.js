import React,{useState} from 'react'
import { FaTimes } from 'react-icons/fa' 

const SideBar = ({ showLinks, handleCloseIcon }) => {
  return (
    <div
      className={
        showLinks
          ? "sidebar show-side-bar-component"
          : "hide-side-bar-component"
      }
    > 
      <div className="div-list-sidebar">
        <FaTimes onClick={handleCloseIcon} className="close-icon" />

        <ul className="ul-list-sidebar">
          <li>Home</li>
          <li>About</li>
          <li>Packages</li>
          <li>community</li>
        </ul>
      </div>
      <div className="items">
        <button className="signup-btn-sidebar">Contact us</button>
      </div>
    </div>
  );
};

export default SideBar