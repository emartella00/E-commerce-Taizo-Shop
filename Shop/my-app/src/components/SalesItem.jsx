import styled from "styled-components";
import { useState,useEffect  } from "react";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
  
  } from "@material-ui/icons";
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import * as React from 'react';
  import axios from "axios";
import {useSelector } from "react-redux";

import { Link } from "react-router-dom";



 const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
 const Price= styled.div `
 color: #ce3535;
 
 font-weight: 800;
 line-height: 100px;
 font-size: 24px; 

 `;
 const Price2= styled.div `
   font-weight: 400;
 color: black;
 line-height: 100px;
 font-size: 20px; 
 margin-left:20px;

;

 `;
 const Title= styled.h3`
  z-index:999;
   
    
    font-weight: 200;
    font-size: 20px;
    line-height: 38px;
    letter-spacing: -1px;
    color: #000;
    width: 100%;
   margin-bottom:-140px;
    font-size: 27px;
    line-height: 22px;
    letter-spacing: .25px;
    
    
  `
  const Info= styled.div`
  display: flex;
  top:30%;
 
  padding-top:60px;
  margin-top:70px;
  margin-left:10px;
  width: 40%;
  height: 40%;

    
  `
  const Info2 = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
 
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container= styled.div`
flex:1;
margin: 60px;
width:250px;
   height:340px;

   position: relative;
  background-color:white;
 border: 2px ;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 &:hover ${Info2}{
   opacity: 1;
 }

`
const SalesItem=({item}) =>{

  

  
  
  


  return (
    <Container>
       
            <img className="Image" src={item.img}/>
            <Title>{item.title}</Title>

<Info2>
            
       <Icon>
       <Link to={`/product/${item._id}`}>
         <SearchOutlined color="secondary"/>
         </Link>
       </Icon>
      
 
      
       </Info2>

            <Info >
                
                
            <Price>{item.pricestock[0] +'€'} </Price>
              <Price2>  <span class='strike'>  {item.price[0] +'€'}</span></Price2>
                
            </Info>
          

    </Container>
  )
}

export default SalesItem