import { category } from '@mui/icons-material';
import React from 'react'
import SalesItem from  './SalesItem';
import {sales} from '../data';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import axios from "axios";

import { useState, useEffect} from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  height: 90%;
  width: 250px;
  display:flex;

  transition: all 1.5s ease;
 
  transform: translateX(${(props) => props.slideIndex * -100}vw);}
 `;

const Container = styled.div`
width: auto;
height:58vh;
overflow-y: hidden;
overflow-x: hidden;
 position:relative;

 
 
  
  
  }
`;




const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  background-color:rgba(253,193,0,0.2);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;




const Sales = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => 
    { try { const res = await axios.get("http://localhost:5000/api/products/promo?promo=true"); setProducts(res.data); }
     catch (err) {} }; getProducts();
   
  },);


  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <h3 div className="title">Prodotti in offerta</h3> 
    <Arrow direction="left" onClick={() => handleClick("left")}>
      <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
    {products.map((item) =>  <SalesItem item={item} key={item._id} />
            ).slice(0,13)}
      
   
    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
      <ArrowRightOutlined />
    </Arrow>
  </Container>
);

};

export default Sales;




