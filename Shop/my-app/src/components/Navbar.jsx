import React, { useState }  from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset } from "../redux/userRedux";
import { resetP } from "../redux/cartRedux";
import { Link, Navigate } from 'react-router-dom';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from './Logo.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';
import logo5 from './Logo5.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import { PermIdentityOutlined} from "@material-ui/icons";
import Table from "./Table"; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import "./Style.css";
const Container = styled.div`
  height: 150px;
  background-color:#F96C85;
  align-items: center;

`;



const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;



const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Right = styled.div`
  flex: 1;
 display: flex;

  justify-content: flex-end;
  }
`;
const Container3 = styled.div`
  height: 141px;
  width:auto;
  border: 0.5px solid #F96C85;
  margin-top:5px;
z-index:999;
position:relative;
overflow-y: auto;

background-color:white;
   
`;

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const quantity = useSelector(state=>state.cart.quantity);
  const [SearchApi , setSearchApi] = useState("");
const [test,settest] = useState("");
const [open,setopen]= useState(false);
const [filterval,setfilterval] = useState("")
  const dispatch = useDispatch();

 
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const quit = (event) => {
      handleCloseUserMenu(event);
      dispatch(resetP());
      dispatch(reset());
   
     navigate("/login");
         
  };


 
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};



const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};



  useEffect(()=>{
    const FetchData =() =>{
      fetch(`http://localhost:5000/api/products`)
      .then(response=> response.json())
      .then(json=>{
        setProducts(json)
        setSearchApi(json)
      })
    }
    FetchData();
   }, [])
 const handleFilter=(e)=>{
  settest(e.target.value)
  if(e.target.value == ' '){
   setProducts(SearchApi)

  }else{const filter = SearchApi.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
 
  
  setProducts(filter)
  }
  setfilterval(e.target.value)
 }
 
 const table= (i)=>{
  if(i !== ' '){
    
    return  (      
    <Container3>
   
    {products.map((item) => (
     
<Table data={item} /> 
)

)}
  </Container3>)
  }else{
 

  }

 }



  function Autenticato() {
    let user_id = useSelector((state) => state.user.currentUser._id);
      return (
          <>
             
             
             <Link style={{textDecoration: 'none',color:'black'}}to={`/info/${user_id}`}>
              <MenuItem onClick={handleCloseUserMenu}>
             <InfoIcon color="secondary"/>
              <Typography   textAlign="center">Profilo</Typography>
             
                    </MenuItem>
              </Link>
              <Link style={{textDecoration: 'none',color:'black'}}to={`/wishlist/${user_id}`}>
              <MenuItem onClick={handleCloseUserMenu}>
             <FavoriteIcon color="secondary"/>
              <Typography   textAlign="center">Wishlist</Typography>
             
                    </MenuItem>
              </Link>
          
          
              <Link style={{textDecoration: 'none', color:'black'}}to={`/usr/${user_id}/orders`}>
              <MenuItem onClick={handleCloseUserMenu}>
                  <LocalShippingIcon color="secondary"/>
                  <Typography textAlign="center">Ordini</Typography>
             
                  </MenuItem>
           </Link>
            
             
            
             
           
                  <MenuItem onClick={quit}>
                  <ExitToAppIcon color="secondary"/>
                  <Typography textAlign="center">Esci</Typography>
                  </MenuItem>
              
             
          </>
      );
  }
  function Admin(){
    let user_id = useSelector((state) => state.user.currentUser._id);
    return (
      <>
           <Link style={{textDecoration: 'none',color:'black'}}to={`/info/${user_id}`}>
              <MenuItem onClick={handleCloseUserMenu}>
             <InfoIcon color="secondary"/>
              <Typography   textAlign="center">Profilo</Typography>
             
                    </MenuItem>
              </Link>
         <Link style={{textDecoration: 'none',color:'black'}}to={`/updatepr`}>
          <MenuItem onClick={handleCloseUserMenu}>
         <InfoIcon color="secondary"/>
          <Typography   textAlign="center">Gestione prodotti</Typography>
         
                </MenuItem>
          </Link>

          <Link style={{textDecoration: 'none',color:'black'}}to={`/wishlist/${user_id}`}>
              <MenuItem onClick={handleCloseUserMenu}>
             <FavoriteIcon color="secondary"/>
              <Typography   textAlign="center">Wishlist</Typography>
             
                    </MenuItem>
              </Link>
      
          <Link style={{textDecoration: 'none', color:'black'}}to={`/usr/${user_id}/orders`}>
              <MenuItem onClick={handleCloseUserMenu}>
              <LocalShippingIcon color="secondary"/>
              <Typography textAlign="center">Ordini</Typography>
         
              </MenuItem>
       </Link>
        
         
        
         
       
              <MenuItem onClick={quit}>
              <ExitToAppIcon color="secondary"/>
              <Typography textAlign="center">Esci</Typography>
              </MenuItem>
          
         
      </>
  );

  }

  function NonAutenticato() {
      return (
          <>
              <Link to="/login" passHref style={{textDecoration: 'none'}}>
                  <MenuItem onClick={handleCloseUserMenu}>

                      <PermIdentityOutlined textAlign="center">Accedi</PermIdentityOutlined>

                  </MenuItem>
              </Link>
              
          </>
      );
  }

  function tab(){

    
    if (user.currentUser !== null) {
      if(user.currentUser.isAdmin ){
        return <Admin />}
        else{return <Autenticato/>}
     }
    else {
        return <NonAutenticato />
    }
}


const handleClick = () => setopen(!open);




  return (
    <Container>
        <div className="wrapper">
        <Left>
<Link  to={`/Home`}>
        <img   src={logo} alt='logo'    width={90} height={90}/>
        </Link>       
        </Left>
        <Center>
        <div className="search">

        <input className="input" placeholder="Ricerca" value={filterval} onInput={(e)=>handleFilter(e)} onClick={handleClick}/>
        <div     className={open ? 'table clicked' : 'table-menu'}>
{table(test)}
   </div>

        </div>
        </Center>
        <Right>

                
                  <Tooltip title={user.isFetching ? "Profilo" : "Accedi"}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p:0}}>
                                    <AccountCircleIcon classname= "v"color='secondary' fontSize="large" />
                                </IconButton>
                            </Tooltip>
                 
                            <Menu
                              
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                   
                                }}
                                keepMounted
                                transformOrigin={{
                                   
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {tab()}

                            </Menu>
            
            <Link to="/cart">
          <div className="menuitem">
          
            
          
          <Badge badgeContent={quantity} color="primary">
            <img   src={logo5} alt='logo'    width={40} height={32}/>
          </Badge>
           
          </div>
            </Link>
            
        </Right>
       
      </div>
      <div className="nav-area">
     
      <Dropdown/>
      </div>
    </Container>
  );
};

export default Navbar;