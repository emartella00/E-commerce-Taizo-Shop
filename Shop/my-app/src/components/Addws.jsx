import { useState,useEffect  } from "react";
import Swal from 'sweetalert2'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  FavoriteBorderOutlined,


} from "@material-ui/icons";
import * as React from 'react';
import styled from "styled-components";
import axios from "axios";
import {useSelector } from "react-redux";
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

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  margin-left:20px;
  background-color:#f8f4f4;#F96C85
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #F96C85;
  }
`;

      





 

const Addws=( {Product})=>{

  let d;
  const id=useSelector((state) =>state.user.currentUser);
  const { isFetching, error } = useSelector((state) =>state.user);

const[user,setUser]=useState( useSelector((state) => state.user.currentUser));

const [display,setDisplay] = useState('none');


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
getUser();}

  
},  

);



function change(){

  if(isFetching){

for(let i=0; i<user.wishlist.length;i++){

if(user.wishlist[i]._id ==Product._id){
{console.log(Product)}

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
      _id: Product._id,
      title: Product.title,
      img: Product.img,
      brand: Product.brand,
     
  });

    const handleClick2 = async () => {

      
  try{ 
      const res = await axios.post(`http://localhost:5000/api/user/ws/${id._id}`,inputs)
    
 setUser(res.data);
 if(res.status==200){
  Swal.fire({
   position: 'center',
   icon: 'success',
   title: 'Eseguito',
   showConfirmButton: false,
 
   timer: 1500
  
 })
  }


}


 catch(err){
     console.log('OrderDetail (updateState):', err);
 }
 
  


}   
   
  



return(
change() 



  )
}  
  export default Addws