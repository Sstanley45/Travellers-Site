import React from "react";
import { useGlobalContext } from "../context";

const Landing = () => {
  const data = useGlobalContext()
  console.log(data); 
  return (
    <>
      <div className="landing-page">
        <div className="hero-content">
          
          <h1>
            Embrace the Magic of{" "}
            <h1 className="style-text">Exploration!</h1>
          </h1>
          <h3>
            Escape, Discover, Inspire: Join us on a Transformative Adventure
            Through Our Travel Journal
          </h3>
        </div>
        <div className="hero-image"></div>
      </div>
    </>
  );
};

export default Landing;
