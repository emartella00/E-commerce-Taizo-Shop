import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'
import Swal from 'sweetalert2'

import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import PopupGfg from '../components/popup';
import { rmvProduct } from "../redux/cartRedux";

import { Link } from 'react-router-dom';


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
const Top=styled.div`

display:flex;
justify-content:space-between;
align-items:center;
`;
const TopBottom=styled.button`
padding:10px;
font-weight:600;
cursor:pointer
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) =>
  props.type === "filled" ? "#F96C85" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom=styled.div`
display: flex;
justify-content: space-between;

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Info = styled.div`
  flex: 3;
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

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
 }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
 }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  
  width:40vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Cart = () => {
 

  const dispatch = useDispatch();
 const deleteProduct = (id) => {

Swal.fire({
  title: 'Vuoi eliminare il prodotto dal carrello?',

  showDenyButton: true,
  confirmButtonText: 'Si',
  denyButtonText: `No`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
  

  dispatch(rmvProduct(id)); }})};
 
  const cart = useSelector((state) => state.cart);
  

  
 
  
 

  
  return (
    
    <Container>
 
   <Navbar/>
<Wrapper>

    <Title>IL TUO CARRELLO</Title>
<Top>
<TopBottom>CONTINUE SHOPPING</TopBottom>

            <TopText>Shopping Bag({cart.quantity})</TopText>
           
          <TopBottom type="filled">CHECKOUT NOW</TopBottom>
</Top>
<Bottom>
          <Info>
        
   
       {cart.products?.map((product) => (
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
                    <ProductId size={product.size} >
                    <b>Formato:</b>  {product.size}
                   </ProductId>
                   <ProductId>
                      <b>Prezzo unitario:</b> {product.price +'€'}
                    </ProductId>
                   
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                   
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <span>
                    
                    <DeleteIcon onClick={()=>deleteProduct(product)} >
                      <ClearIcon />
                    </DeleteIcon>
                  </span>
                  </ProductAmountContainer>
                  <ProductPrice>
                  
                  {(product.price * product.quantity).toFixed(2)} €
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{(cart.total ).toFixed(2) +'€'}</SummaryItemPrice>
            </SummaryItem>
            
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{(cart.total ).toFixed(2) +'€'}</SummaryItemPrice>
            </SummaryItem>
            <PopupGfg cart={cart}/>
      
         
                 
         
         
            
          </Summary>
        </Bottom>
       
</Wrapper>
   <Newslatter/>
   <Footer/>

   </Container>
       
           
  )
};export default Cart;