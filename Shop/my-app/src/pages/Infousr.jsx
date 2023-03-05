import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'
import styled from "styled-components";
import { useState, useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import sfondo from "./sfondo.png"
import Typography from '@mui/material/Typography';


import { useSelector } from "react-redux";
  import "./user.css";

  const Error = styled.span`
  color: red;
`;
const Error2= styled.span`
color: green;
`;

const Container=styled.div`
overflow-x:hidden;
`;
const Wrapper=styled.div`flex:1`;
const Container3=styled.div`
display:flex;
`;

const Infousr = () =>{
  const [error,setError]=useState("");
  const [user, setuser] = useState([]);
  let user_id = useSelector((state) => state.user.currentUser._id);
  const [state,setState] = useState([]);

 
  const updateState = async () => {

   
    try{ 
      const res =  await axios.post(`http://localhost:5000/api/user/${user_id}`,state);
   
       if(res.status===200)
       { Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Modifica avvenuta correttamente',
            showConfirmButton: false,
            timer: 1600
          })

       }
  else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Qualcosa è andato storto',
      showConfirmButton: false,
      timer: 1600
    })
   
 
} }catch(err){
  console.log('OrderDetail (updateState):', err);
}}
const updateState2 = async () => {


  try{ 
      const res = await axios.post(`http://localhost:5000/api/user/password/${user_id}`,state);
      console.log(res.status);
      if(res.status===200)
      { Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Modifica avvenuta correttamente',
           showConfirmButton: false,
           timer: 1600
         })

      }
 else {
   Swal.fire({
     position: 'center',
     icon: 'error',
     title: 'Qualcosa è andato storto',
     showConfirmButton: false,
     timer: 1600
   })
  

}
       
      
     

  }
  catch(err){
      console.log('OrderDetail (updateState):', err);
  }
}
const handleState = (event) => {
  
  const name = event.target.name;
  const value = event.target.value;
  setState(values => ({ ...values, [name]: value }));
  console.log(state);
}

  useEffect(() => {

  
    const getuser = async () => {
      try {


        const res = await axios.get(

           
         `http://localhost:5000/api/user/find/${user_id}`);
            
        setuser(res.data);
     
       
      
    
      } catch (err) {}

     
 
   
    
  

  };
  getuser();



 

} 

);









  return ( 
   
    <Container>
    <Navbar/>


  <>
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Informazioni personali</h1>
       

      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
          
</div>
         
<div className="userShowBottom">
            <span className="userShowTitle">Dettagli account</span>
            <div className="userShowInfo">
          
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            
            <span className="userShowTitle">Dettagli di contatto</span>
            <div className="userShowInfo">
            </div>
            <div className="userShowInfo">
            <span className="userShowInfoTitle">{user.tel}</span>
            
            </div>
            <div className="userShowInfo">
            <span className="userShowInfoTitle">{user.email}</span>
           
            </div>
          </div>
       
        </div>
        
        <div className="userUpdate">
        <span className="userUpdateTitle">Modifica</span>
        
        <Box container spacing={1}>
         
          <Grid container spacing={2}>
      
              <Grid  item xs={6} sm={5}>
              <TextField color="success"
           
                required
                fullWidth
                name="username"
                label="Username"
                placeholder={user.username}
                onInput={(e)=>handleState(e)}
              />
            </Grid>

          
        
               

                <Grid   item xs={6} sm={5}  >
              <TextField  color="success"
                name="name"
                required
                fullWidth
                label="Nome"
                placeholder={user.name }
                autoFocus
                onInput={(e)=>handleState(e)}
              />
            </Grid>
             
           
              <Grid  item xs={6} sm={5} >
              <TextField color="success"  
                name="surname"
                onInput={(e)=>handleState(e)}
                  
                  placeholder={user.surname }
                required
                fullWidth
                label="Cognome"
               
              />
            </Grid>
               
            
              <Grid  item xs={6} sm={5}>
              <TextField  color="success"  
                required
                fullWidth
                onInput={(e)=>handleState(e)}
                  type="text"
                  placeholder={user.email}
                label="Email"
                name="email"
               
              />
            </Grid>
                
             
              <Grid  item xs={6} sm={5}  >
              <TextField color="success"  
                required
                fullWidth
                label="Telefono"
                name="tel"
                onInput={(e)=>handleState(e)}
                type="text"
                placeholder={user.tel}
               
              />
            </Grid>
               
           
              <Grid  item xs={6} sm={5} >
              <TextField color="success"  
           
                required
                fullWidth
                name="password"
                label="Conferma password"
                type="password"
                onInput={(e)=>handleState(e)}
              />
            </Grid>
               
            
             
              <button className="userUpdateButton" onClick={updateState}>Modifica</button>
           
                       
              
     
            
           
            </Grid>
            </Box>
          

       
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Modifica Password</span>
          <Box container spacing={1}>
         
         <Grid container spacing={2}>

         <Grid  item xs={6} sm={5}>
              <TextField color="success"
           
                required
                fullWidth
                name= "ppassword"
                 onInput={(e)=>handleState(e)}
                label="Vecchia password"
               type="password"
               
              />
            </Grid>

            
         <Grid  item xs={6} sm={5}>
              <TextField color="success"
           
                required
                fullWidth
                name= "password"
                onInput={(e)=>handleState(e)}
                 type="password"
                label="Nuova password"
               
               
              />
            </Grid>
     
               
            
               
             
              <button className="userUpdateButton" onClick={updateState2}>Update</button>
             
              </Grid>
            </Box>
               

        </div>
        </div>             
       
          
      </div>
   
    
    
  <Newslatter/>
  <Footer/>
  </> 

  </Container>

  
  )
};export default Infousr;