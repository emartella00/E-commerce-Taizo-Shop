import React from 'react'
import { useState } from "react";

import { MenuItems } from './MenuItems';

function Submenu({item,depthLevel}) {
  const [click, setClick] = useState(false);
  const [dropdown,setDropdown] = useState(false);


  return (
   
       
      
      
    <li>
         
             {item.submenu && (
              <>
                   <h3
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}>

           {item.title}
         </h3>
          
          



                  <ul className={`dropdown ${dropdown ? "drop2" : "drop2 clicked"}`}>
                    {item.sublinks.map((mysublinks) => (
                      <div>
                        <h3 className="">
                          {mysublinks.Head}
                        </h3>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <a href
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </a>
                          </li>
                        ))}
                      </div>
                    
                     
                    ))}
                     </ul>
             
           
            ) </>
                       ) }
                       
            </li>
          
                                                                
  )
}

export default Submenu
