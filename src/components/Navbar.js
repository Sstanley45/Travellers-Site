import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";
import { useGlobalContext } from "../context";


export default function Navbar() {   
  const { displaySubmenu, closeSubmenu } = useGlobalContext(); 
  const [showLinks, setShowLinks] = useState(false)


  const handleCloseIcon = () => { 
    setShowLinks(false)  
  }
  
  const openSubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 10 
    displaySubmenu(page, {center, bottom})  
  }
  const hideSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) 
      closeSubmenu()  
  }
                                    

  return (
    <>
      <div className="navBar" onMouseOver={hideSubmenu}>
        <div className="items">
          <h1 className="navBar-text">Palm Travellers</h1>
        </div>
        <div className="nav-list items">
          <ul className="ul-list">
            <li>Home</li>
            <li className="link-btn" onMouseOver={openSubmenu}>
              Products
            </li>
            <li className="link-btn" onMouseOver={openSubmenu}>
              Support
            </li>
            <li className="link-btn" onMouseOver={openSubmenu}>
              Company
            </li>
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
