import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'
import { Add, Remove } from "@material-ui/icons";

import styled from 'styled-components'
import Sales from '../components/Sales';
import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addProduct } from "../redux/cartRedux";
import {useSelector } from "react-redux";
import axios from "axios";
import Addws from  '../components/Addws'
import { ProductionQuantityLimits } from '@mui/icons-material';
const Container=styled.div`

overflow-x:hidden;

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
 }
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 50%;
  height: 60vh;
  object-fit: cover;
  margin-left:100px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Title2 = styled.h3`
  font-weight: 80;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.h2`
  font-weight: 100;
  font-size: 40px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  }
`;
const FormatContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
}
`
;
const Format = styled.div`
  display: flex;
  align-items: center;
`;

const FormatTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FormatBox = styled.button`
  height:50px;
  width: 100px;
  border: 1px solid black;
  background-color: beige;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
  &:focus{
    background-color:#F96C85;
   }
  
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;

  border: 2px solid black;
  background-color:#f8f4f4;#F96C85
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #F96C85;
  }
`;
const Box = styled.div`
border-radius:10px;
margin-left:100px;
height:500px;
width:90%;
border:2px solid beige;

`;
const BoxCnt= styled.div`
display:flex;


`;
const BoxTitle = styled.div`
 height:50px;
 width:200px;

flex:1;
 background-color:whitesmoke;
 border: 1px solid beige;
`;
const BoxA = styled.div`
margin-top:50px;
width:100%;
z-index:1

`;
const BoxB = styled.div`
margin-top:50px;
width:100%;
z-index:1

`;


  

const Product=() =>{
  
  const dispatch = useDispatch();
  const location = useLocation();
  const { isFetching, error } = useSelector((state) =>state.user);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(product.price);

 const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };


  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity,price, size })
    );
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      
        
        
      } catch {}
  
    };
    getProduct();

    
  },   [id]
  

);


 



 

  const click =(c)=>{
 
    setSize(c);
    for(let x=0; x<product.size.length;x++)
    {   
      
      
      if(product.size[x] == c)
      if(product.promo){
      {   setPrice(product.pricestock[x])
       

    }
  }
  else{setPrice(product.price[x]) 
  }

    }
    
  

    

  }


  

  return (
    
    isFetching ?
    <Container>

    <Navbar/>
    <Wrapper>


    <ImgContainer>
    <Image src={product.img} />
   
        </ImgContainer>
        
        <Addws Product={product} key={product._id}  /> 

        <InfoContainer>
        <Title>{product.title}</Title>
        <Title2>{product.brand}</Title2>
       
        <Desc>{product.desc}</Desc>
        <Price>   {price }  {'€' } 
        </Price>
       
            <FormatContainer>
        <Format>
        {product.size?.map((c) => (
                <FormatBox key={c} size={c} onClick={() => click(c)} >{c}</FormatBox>  
              ))}
        </Format>
            </FormatContainer>
            <AddContainer>
            <AmountContainer>
            <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>AGGIUNGI AL CARRELLO</Button>
         
          </AddContainer>
          
         
         
        
         
       
         
     
            </InfoContainer>

        
    </Wrapper>
    <Box>
        <BoxCnt>
<BoxTitle>Descrizione
<BoxA>
  {product.desc2};
 
  </BoxA>
</BoxTitle>

<BoxTitle>Ingredienti
  <BoxB>
{product.ingredients}
</BoxB>
</BoxTitle>

</BoxCnt>
        </Box>
     <Sales/>
     <Newslatter/>
     <Footer/>
    
    </Container>

   :   <Container>

   <Navbar/>
   <Wrapper>

   <ImgContainer>
   <Image src={product.img} />

       </ImgContainer>
       
      

       <InfoContainer>
       <Title>{product.title}</Title>
       <Title2>{product.brand}</Title2>
      
       <Desc>{product.desc}</Desc>
       <Price>   {price}  
       </Price>
           
           <FormatContainer>
       <Format>
       {product.size?.map((c) => (
               <FormatBox key={c} size={c} onClick={() => click(c)} >{c}</FormatBox>  
             ))}
       </Format>
           </FormatContainer>
           <AddContainer>
           <AmountContainer>
           <Remove onClick={() => handleQuantity("dec")} />
             <Amount>{quantity}</Amount>
             <Add onClick={() => handleQuantity("inc")} />
           </AmountContainer>
           <Button onClick={handleClick}>AGGIUNGI AL CARRELLO</Button>
        
         </AddContainer>
         
        
        
       
        
      
        
    
           </InfoContainer>

       
   </Wrapper>
   <Box>
       <BoxCnt>
<BoxTitle>Descrizione
<BoxA>
 {product.desc2};

 </BoxA>
</BoxTitle>

<BoxTitle>Ingredienti
 <BoxB>
{product.ingredients}
</BoxB>
</BoxTitle>

</BoxCnt>
       </Box>
    
     <Newslatter/>
    <Footer/>
  
   
   </Container>



  )
}

export default Product