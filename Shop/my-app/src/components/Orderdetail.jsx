import styled from "styled-components";
import { useState, useEffect} from "react";
import axios from "axios";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'
import { useSelector } from "react-redux";
import Moment from 'react-moment';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Title=styled.h1`
font-weight:200;
text-align:center;

`;
const Title2=styled.h2`
font-weight:200;
text-align:center;

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
const ProductId = styled.span``;
const ProductName = styled.span``;
const Container=styled.div`

overflow-x:hidden;

`;
const Wrapper=styled.div`


padding:20px;
`;
const Info = styled.div`
  flex: 3;
`;

const Bottom=styled.div`
display: flex;
justify-content: space-between;

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








function NoAdmin({orders}){
  const navigate = useNavigate();
    let user_id = useSelector((state) => state.user.currentUser._id);
 return(   
    
    <>
     
  
<Info>
 
<Title>Ordini</Title>



    {   orders.length===0 ?
    <Title2>Non ci sono ordini</Title2>
    
  :  orders.reverse()
    
    .map((product) => (


        <Product>
        <ProductDetail>
        <Link to={`/usr/${user_id}/orders/${product._id}`}>
        <Image src={product.products[0].img} />
       
         
          </Link>
        
          <Details>
                            <ProductName>
                              <b>Ordine N:</b> {product._id}
                            </ProductName>
                           
                            <ProductId>
                            <b>Indirizzo:</b>  {product.address.map((i)=>(
                                i.address)
                            )}
                           </ProductId>
                            <ProductId>
                            <b>Stato:</b>  {product.status}
                           </ProductId>
        
                           <ProductId>
                              <b>Costo:</b> {product.amount}
                            </ProductId>
                            <ProductId>
                       
                            <b>Data:</b> <Moment format="DD/MM/YYYY">{product.createdAt}</Moment>
                           </ProductId>
                           
                           
                           
                          </Details>
        
        </ProductDetail>
        </Product>



)) 

}

</Info>

        
       
        </>
 )

}









function tab(orders)
{
 

    return <NoAdmin   orders={orders}/>



    
    
}

   
 
const OrderDetail = () => {
    const [orders, setorders] = useState([]);
   
    let user_id = useSelector((state) => state.user.currentUser._id);
    const user = useSelector((state) => state.user.currentUser.isAdmin);
   
   
    useEffect(() => {
        if(!user){
    
        const getorders = async () => {
          try {


            const res = await axios.get(

               
             `http://localhost:5000/api/orders/find/${user_id}`);
           
                
            setorders(res.data);
            {console.log(orders)}
           
           
        
    
          
       
          } catch (err) {}
        };
        getorders();
      }
    
     else{
        const getorders = async () => {
            try {
  
  
              const res = await axios.get(
  
                 
               `http://localhost:5000/api/orders`);
                  
              setorders(res.data);
            } catch (err) {}
          };
          getorders();


    }
   
} 
   );
   
   
   return(
    <Container>
    <Navbar/>
  <Wrapper>
  <Bottom>

    {tab(orders)}

    </Bottom>
</Wrapper>
  <Newslatter/>
  <Footer/>
  </Container>

   )


 
   
};export default OrderDetail;