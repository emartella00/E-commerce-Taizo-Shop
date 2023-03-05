import Dropdown from './Dropdown';
import { ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect, useRef } from "react";
import Dp from './Dp';
import { Link } from 'react-router-dom';
  
const MI = ({ items,items2,depthLevel,}) => {
 let i;
  const [value,setValue]  =useState("");

  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();


 
  
 

   
  
 
   
   useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
   

  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
    
     
      return( 
        <li className="menu-items"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
          {items.submenu ? (
            <>
              <button 
               aria-expanded={dropdown ? "true" : "false"}
               value= {items.title}
              
             
               >  
               
          
            
              <
                Link to={`/products/${items.link}`}>
                 <a>{items.title}</a>
                 </Link> 

                 
              
              </button>  
             
              <Dp submenus={items.submenu}
              items = {items2}  
              depthLevel={depthLevel}
              dropdown={dropdown} 
              
              />
             
                 
            </>
          ) : (

           
            <Link to={`/products/${items.link}`}>
            <a>
            {items.title
            }
           
           
            </a>
            </Link> 
         ) }
        </li>
      );
          };
  
    export default MI;
          

          

          