import React from 'react'
import styled from "styled-components";

import { Link } from "react-router-dom";
const Container = styled.div`
{
  
  
height: 100px;

  margin:40px;
}
`;



const Categoriesimg=({item})=> {
  return (
    <Container>
       <Link to={`/products/${item.link}`}>
         <img div className="img"src={item.img}/>
        
          </Link>
    </Container>
  )
}

export default Categoriesimg