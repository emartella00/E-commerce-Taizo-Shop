import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/userRedux";
import { useState } from "react";
import * as React from 'react';
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import sfondo from "./sfondo.png"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Error = styled.span`
  color: red;
`;
const Register = () => {
  const navigate =useNavigate();
const dispatch =useDispatch();
  const [error, setError] = useState();

  const handleSubmit = async() => {
   
    try{
   const res= await axios.post('http://localhost:5000/api/auth/register', inputs)
      console.log(res.status);

      if (res.status === 201)
      {  Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registrazione avvenuta correttamente',
          showConfirmButton: false,
          timer: 1800
        })
        
       
        
        
        }
      else 
      {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Qualcosa è andato storta!',
         
      
  
        })
        setError(true);
      } 
    }catch(err){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Qualcosa è andato storta!',
       
      })

    }
  }

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setInputs(values => ({ ...values, [name]: value }));
    console.log(inputs);
  }


  return (

    <Container >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
 
 <img   src={sfondo} alt='logo'   width={200} height={200} />
        <Typography component="h1" variant="h5">
          Registrazione
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} >
              <TextField  color="success" focused 
                name="name"
                required
                fullWidth
                label="Nome"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField color="success" focused 
                name="surname"
                required
                fullWidth
                label="Cognome"
                onChange={handleChange}
              />
            </Grid>
          
           
            <Grid item xs={6} >
              <TextField color="success" focused 
                required
                fullWidth
                label="Telefono"
                name="tel"
                type="tel"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} >
              <TextField color="success" focused 
           
                required
                fullWidth
                name="username"
                label="Username"
            
                onChange={handleChange}
              />
            </Grid>



            <Grid item xs={12}>
              <TextField  color="success" focused 
                required
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} >
              <TextField color="success" focused 
           
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} >
              <TextField color="success" focused 
           
                required
                fullWidth
                name="ppassword"
                label="Conferma password"
                type="password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {error && <Error>Compilare tutti i campi obbligatori!</Error>}
          <Button color="success"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Registrati
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Hai già un account? Accedi
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>

  );
}

export default Register;