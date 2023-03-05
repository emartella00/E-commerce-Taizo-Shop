import React from 'react'
import styled from "styled-components";
import {categories} from "../data"
import Categoriesimg from  "./Categoriesimg";
const Container = styled.div`

height:280px;
 position:relative;
 margin-top: 40px;
  
}
`;
const Wrapper = styled.div`
  height: 280px;
  display:flex;
  background-color: #BFFF29;
  margin-top: 40px;
  
}`;

const Categories = () => {
  return (
    <Container>
      
        <Wrapper>
        <h3 className="tt">Trova un prodotto per</h3>
        {categories.map((item) => (
        <Categoriesimg item={item} />
      ))}
        </Wrapper>
    </Container>
  )
}

export default Categories
