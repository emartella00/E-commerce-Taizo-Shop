import React, { useState } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import styles from '../components/Style.css';
import Newslatter from '../components/Newslatter';
import Products from '../components/Products';
import Footer from "../components/Footer";
import { useLocation } from "react-router";
const Container=styled.div`
background-color:whitesmoke;
overflow-x: hidden;
align-items: center;
overflow-x: block;

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


const ProductList=()=> {
  const location = useLocation();
  const  cat = location.pathname.split("/")[2];
const  cat2 = location.pathname.split("/")[3];
  const cat3 = location.pathname.split("/")[4];



  return (
    <Container>
     
    <Navbar/>
    <h1>Prodotti</h1>
  
 
<Center>
      <Products cat={cat}  cat2={cat2} cat3={cat3} />
     
      </Center> 
      <Newslatter/>
      <Footer/>
           </Container>
  )
}

export default ProductList