import React from "react";




export default function Navbar(){
    return(
        <nav className="navbar bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand nav-pic" href="#">
                <img src="https://cdn-icons-png.flaticon.com/128/814/814587.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                Travel Journal
                </a>
            </div>
        </nav>
    )
}