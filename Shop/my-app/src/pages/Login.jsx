import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import sfondo from "./sfondo.png"
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [password, setPassword] = useState([]);
  

  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
 
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useNavigate();

 
  const handleClick = (e) => {
    e.preventDefault();
   let vrf= login(dispatch, { username, password });
    if (vrf) {
      history.push("/");
    }
  };
  return (
  
    <Container maxWidth="sm">
       
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
        <Typography  component="h1" variant="h5">
       
         Esegui l'accesso
         
        </Typography>
        <Box  
       
        
        component="form" noValidate sx={{ mt: 1}}>
          <TextField color="success" focused 
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField color="success" focused 
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Error>Email o password errate!</Error>}
          <Button color="success"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            Accedi
          </Button>
        
          <Grid container>
            <Grid item>
              <Link to={"/register"} variant="body2">
              Non hai un account? Registrati
               
              
              </Link>
            </Grid>
          </Grid>
         
        </Box>
      </Box>
     
    
    </Container>
    
  );
};

export default Login;