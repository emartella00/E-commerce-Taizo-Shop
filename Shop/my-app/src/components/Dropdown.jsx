import { MenuItems } from './MenuItems';
import MI from './MI';
import React from 'react';

const Dropdown = () => {
  return (
    <nav>
      <ul className="menus">
        {MenuItems.map((menu, index) => {
             const depthLevel = 0;
          return (
            <MI items={menu} items2={menu} key={index} depthLevel={depthLevel} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Dropdown;