import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2'
const Container=styled.div`

overflow-x:hidden;

`;
const Wrapper=styled.div`

padding:20px;
`;
const Title=styled.h1`
font-weight:200;
text-align:center;

`;

const Bottom=styled.div`
display: flex;
justify-content: space-between;

`;

const Info = styled.div`
  flex: 3;
`;
const Title2=styled.h2`
font-weight:200;
text-align:center;

`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Wishlist = () => {
    let id = useSelector((state) => state.user.currentUser._id);
    const[user,setUser]=useState([]);


    
    

      const deteleproduct = async (id) => {
      
        
    try{ 
        const res = await axios.post(`http://localhost:5000/api/user/deletews/${id}`,user)
       
    
          
   setUser(res.data)   
   

  }
   catch(err){
       console.log('OrderDetail (updateState):', err);
   }

      
    


 }   
    

useEffect(() => {
    const getUser = async () => {
          
      try{ 
          const res = await axios.get(`http://localhost:5000/api/user/find/${id}`)
    
     setUser(res.data)
  
  
    
      }
      catch(err){
          console.log( err);
      }
       
      
  
    };
    getUser();

  
      
  }, );

    return( 
    <Container>
 
        <Navbar/>
        <Wrapper>
       


        <Title>Wishlist</Title>

<Bottom>
          <Info>
        
          {
           user.wishlist?.length===0 ?
           <Title2>Non ci sono prodotti salvati</Title2>
          
          
             : user.wishlist?.map((product) => (
              <Product>
                <ProductDetail>
                <Link to={`/product/${product._id}`}>
                  <Image src={product.img} />
                  </Link>
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                </ProductId>
                <ProductId>
                      <b>Brand:</b> {product.brand}
                </ProductId>
                   
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                   
                   
                    <FavoriteIcon color="secondary"onClick={()=>deteleproduct(product._id)} >
                      <DeleteIcon />
                    </FavoriteIcon>
                 
                </ProductAmountContainer>
                </PriceDetail>
               
              </Product>
            ))}
            <Hr />
          </Info>
       
        </Bottom>











     </Wrapper>
   <Newslatter/>
   <Footer/>
   
   </Container>
   )
};export default Wishlist