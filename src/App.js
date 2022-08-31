import React from "react";
import data from "./data.js";
import Card from "./Card.js";
import Navbar from "./Navbar.js";


export default function App(){
    const mydata = data.map(item => {
        return(
            
            <Card 
                key = {item.id}
                item = {item}
            />
             )
    })

    return(
        <div>
            <Navbar />
            {mydata}
        </div>
        
        
    )
}




