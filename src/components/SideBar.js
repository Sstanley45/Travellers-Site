import React,{useState} from 'react'
import { FaBars } from 'react-icons/fa' 

const SideBar = () => {
   
  return (
    <section className="sidebar">
     
        <div className="div-list-sidebar">
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
    </section>
  );
}

export default SideBar