import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context"; 


const Submenu = () => {
  const { isSubmenuOpen, location, page:{page,links}  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumn] = useState('col-2') 

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;   
    submenu.style.top = `${bottom}`;  
    if (links.length === 3) {
      setColumn('col-3') 
    }
    if (links.length > 3) {
      setColumn('col-4')
    }
  }, [location, links]); 

  return (
    <div
      ref={container}
      className={isSubmenuOpen ? `submenu show-submenu ` : `submenu `}
    >
      <h3>{page}</h3>
      <div className={`submenu-center ${columns}`}> 
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a key={index} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
