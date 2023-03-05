import { useState,useEffect  } from "react";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
  
  } from "@material-ui/icons";
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import * as React from 'react';
  import axios from "axios";
import {useSelector } from "react-redux";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  import { useDispatch } from 'react-redux';
import { addProduct } from "../redux/cartRedux";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`

  flex-grow:0;
    margin: 15px;
    min-width: 290px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   width:330px;
    height:400px;
    display: flex;
    z-index:2;
   border-radius: 25px;
   background-color:white;
    position:relative;
    
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
 
  
  const Image = styled.img`
    height: 40%;
    width:50%;
   
    z-index: 2;
    margin-left: 90px;
    margin-top:50px;
  `;
  const Title= styled.h3`
  z-index:999;
   
    
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -1px;
    color: #000;
    width: 100%;
   
    font-size: 27px;
    line-height: 22px;
    letter-spacing: .25px;
    
    margin-top:250px;
    margin-left:-260px;
  `
  const Price= styled.div `
  color: #ce3535;
  
  font-weight: 800;
  line-height: 100px;
  font-size: 24px; 
  margin-top:320px;
  margin-left:-300px;
  `;
  const Price2= styled.div `
    font-weight: 400;
  color: black;
  line-height: 100px;
  font-size: 20px; 
  margin-top:320px;
  margin-left: 20px;
  `;
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
  const Title2 = styled.h3`
  font-weight: 80;

  z-index:999;
   

    width: 100%;
   
    font-size: 24px;
    line-height: 22px;
    letter-spacing: .25px;
    
    margin-top:280px;
    margin-left:-340px;
`;


  
  const Product = ({ item }) => {


    
    let d;
    
  
  const[user,setUser]=useState(useSelector((state) => state.user.currentUser));
  const id=useSelector((state) =>state.user.currentUser);
  const { isFetching, error } = useSelector((state) =>state.user);



useEffect(() => {
  if(isFetching){
  const getUser = async () => {
        
    try{ 
        const res = await axios.get(`http://localhost:5000/api/user/find/${id._id}`)
  
   setUser(res.data)


  
    }
    catch(err){
        console.log( err);
    }
     
    

  };
  getUser();

}
},  

);
 


function change(){


  if(isFetching){
 for(let i=0; i<user.wishlist.length;i++){

  if(user.wishlist[i]._id ==item._id){
    


    d= 1
   
  }
 
 }

  if(d == 1){
    return(
      <Icon>
    <FavoriteIcon color="secondary" onClick={handleClick2}/>
    </Icon>
)
     }else{
   
     return(
      <Icon>
      <FavoriteBorderOutlined color="secondary" onClick={handleClick2}/>
     </Icon>
     )
    }

  }
 
}
  

    const [inputs, setInputs] = useState({
        _id: item._id,
        title: item.title,
        img: item.img,
        brand: item.brand,
       
    });

      const handleClick2 = async () => {
  
    try{ 
        const res = await axios.post(`http://localhost:5000/api/user/ws/${id._id}`,inputs)
 
   setUser(res.data)
  }
   catch(err){
       console.log('OrderDetail (updateState):', err);
   }


  
  }




     
    const price= ()=>{
    if(  item.promo )
    {
      return item.pricestock[0] +'€';
    
    }
    else{
       return item.price[0]+'€'};


      
    }
    const pricebar=()=>{
      if(  item.promo ){
         
       
        return  item.price[0]+'€' 
        
       
      }
      
     }
  
    return (
     
      <Container>
       
      
        <Image src={item.img} />
        
        <Info>
        
         
          <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined color="secondary" />
            </Link>
          </Icon>
         {change()}
          
        </Info>
        <Title>{item.title}</Title>
        <Title2>di {item.brand}</Title2>
       <Price>{price()}</Price>
       <Price2>
       <span class="strike">{pricebar()}</span>
       </Price2>
       
      </Container>

    );
  };

  export default Product;