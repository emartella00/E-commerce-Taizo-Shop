import styled from "styled-components";
import { useState, useEffect} from "react";
import axios from "axios";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';
import Swal from 'sweetalert2'

import HomeIcon from '@mui/icons-material/Home';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const Container=styled.div`

overflow-x:hidden;


`;
const Wrapper=styled.div` 
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

const Info = styled.div`
width:980px;

padding: 20px;
flex:3

justify-content: space-between;



margin-top:10px;
`;

const Product = styled.div`
flex-wrap: wrap;
  justify-content: space-between;
  }
`;

const ProductDetail = styled.div`
width:700px;

padding: 20px;
flex:1;
display: flex;

flex-wrap: wrap;
justify-content: space-between;


`;

const Image = styled.img`
  width: 200px;
 
`;
const Title=styled.h2`
font-weight:200;
text-align:center;

`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const Summary = styled.div`
flex:1;
  border: 0.5px solid gray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  width:60vh;
 margin-top:40px;
 margin-bottom:20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  flex:1;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

function Admin({orders}){

  const location = useLocation();
  const  id_order = location.pathname.split("/")[4];
  const  user_id = location.pathname.split("/")[2];
  const [state, setState] = useState({
    stato:"",
    chiave:""
  });
  
  const stato = [
    {
        value: '1',
        label: 'in preparazione',
    },
    {
        value: '2',
        label: 'in consegna',
    },
    {
        value: '3',
        label: 'consegnato',
    },
];
  const updateState = async () => {
      try{ 
          const res = await axios.post(`http://localhost:5000/api/orders/${id_order}`,state);
     console.log(res.data);
     if (res.status === 200) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Modifica avvenuta con successo',
        showConfirmButton: false,
        timer: 2000,
    
      })
    
    }else{
     
           
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
         
        })
    }
 

      }
      catch(err){
          console.log('OrderDetail (updateState):', err);
      }
  }

const handleState = (event) => {
  
    setState({stato:event.target.value,
    chiave:event.target.value
    
    });
    

};
  
  return(

    <>
     <Link to={`/usr/${user_id}/orders`}>
  <ReplyIcon color="secondary"/>
  </Link>
  <Bottom>
          

 
            { 
            orders.map((i) => (
            <>
           <Info> 
        <Product>
                <ProductDetail>
        
                { i.products.map((x) => 
              ( <>
               <Image src={x.img} /> 
               <Details>
                      <ProductName>
                        <b>ID Prodotto:</b> {x.productId}
                      </ProductName>
                      <ProductId>
                        <b>Quantità:</b> {x.quantity}
                      </ProductId>
                      <ProductId>
                        <b>Quantità:</b> {x.size}
                      </ProductId>
                      <ProductId>
                        <b>Prezzo unitario:</b> {x.amountp}
                      </ProductId>
                   
                     
                     
                    </Details>
              
               </>   )  )
  }                   
              </ProductDetail>
              </Product> 
              </Info>
              <Summary>
              <SummaryTitle>Stato Ordine</SummaryTitle>
              <SummaryItem>
                <ProductName>
                      Totale: {i.amount}
                      </ProductName>
                      </SummaryItem> 
                      <SummaryItem>   
                      <ProductName>
                      Stato: {i.status}
                     
                      </ProductName>
                      </SummaryItem>

                      <SummaryItem>   
                { i.address.map((r) => 
              ( <>
              <ProductName>
            
                        Indirizzo: {r.address}
                     
                      </ProductName>
                
              
               </>   )  )
  }
    </SummaryItem>

            
  
            <TextField  select
                                            label="Modifica stato"
                                            value={state.value}
                                            onChange={handleState}
                                            name="order_state"
                                            sx={{ marginTop: 2 }}
                                            size='small'
                                            fullWidth
                                        >
                                            {stato.map((option) => (
                                                <MenuItem  key={option.value} value={option.label}>
                                                {option.label}
                                            </MenuItem>
                                            ))}
                                        </TextField>
                                        {(state === '') ?
                                            <Button disabled>Conferma stato</Button>

                                            :
                                            <Button  onClick={updateState}>Conferma stato</Button>
                                        }
               
           
            
        
                   
           
                
             
              
            </Summary>
      
                      
            </>
            
            
            
            
            )) 
            
           
               }  
                 


          </Bottom>
          
  
     </>
  )

}



function NoAdmin({orders}){
  const location = useLocation();
  const  user_id = location.pathname.split("/")[2];
  return(

    <>
       <Link to={`/usr/${user_id}/orders`}>
  <ReplyIcon color="secondary"/>
  </Link> 
  
  <Bottom>
          
 

            { 
            
            orders.map((i) => (
            <>
            <Info> 
                <Product>
                <ProductDetail>
        
                { i.products.map((x) => 
              ( <>
                 <Link to={`/product/${x.productId}`}>
               <Image src={x.img} /> 
               </Link>
               <Details>
                      <ProductName>
                        <b>ID Prodotto:</b> {x.productId}
                      </ProductName>
                      <ProductId>
                        <b>Quantità:</b> {x.quantity}
                      </ProductId>
                      <ProductId>
                        <b>Quantità:</b> {x.size}
                      </ProductId>
                      <ProductId>
                        <b>Prezzo unitario:</b> {x.amountp}
                      </ProductId>
                   
                     
                     
                    </Details>
              
               </>   )  )
  }                   
              </ProductDetail>
              </Product>
              </Info>  
              <Summary>
              <SummaryTitle>Stato Ordine</SummaryTitle>
              <SummaryItem>
                <ProductName>
                      Totale: {i.amount}
                      </ProductName>
                      </SummaryItem>
                      <SummaryItem>
                      <ProductName>
                      Stato: {i.status}
                      </ProductName>
                      </SummaryItem>
                      <SummaryItem>
                   
                { i.address.map((r) => 
              ( <>
           
              <ProductName>
              
             
               Indrizzo : {r.address}
               
                       
                      </ProductName>
                     
              
               </>   ) )}
                
               </SummaryItem>
                
               
               
               
  
               
             
            
        
                   
           
                
             
              
            </Summary>
  
  
  
      
                      
            </>
            
            
            
            )) 
      
            
           
               }
                   


          </Bottom>

    
     </>
  )

}

function tab(user,orders)
{
 if(user==false){

    return <NoAdmin   orders={orders}/>

 }else{ return <Admin   orders={orders}/>}

    
    
}

const   Order = () => {
    const location = useLocation();
    const  id_order = location.pathname.split("/")[4];
    const [orders, setorders] = useState([]);
    const user = useSelector((state) => state.user.currentUser.isAdmin);
    useEffect(() => {
     
    
        const getorders = async () => {
          try {


            const res = await axios.get(

               
             `http://localhost:5000/api/orders?_id=${id_order}`);
                
            setorders(res.data);
          } catch (err) {}
        };
        getorders();
   
   
} 
   );

return(<Container>
  <Navbar/>
<Wrapper>
<Bottom>

  {tab(user,orders)}

  </Bottom>
</Wrapper>
<Newslatter/>
<Footer/>
</Container>
         
)





};export default Order;