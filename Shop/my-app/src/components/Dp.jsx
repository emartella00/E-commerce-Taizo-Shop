import React from 'react';
import MI from './MI';
const Dp = ({ submenus,items, dropdown, depthLevel   }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <MI items={submenu} items2 = {items} key={index} depthLevel={depthLevel} />
          ))}

          
        

      </ul>
    );
  };
  
  export default Dp;