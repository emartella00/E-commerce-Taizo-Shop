import * as React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Swal from 'sweetalert2'
import "./Style.css";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import {MenuItems} from './MenuItems.js'
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 5,
    p: 2,
};





export default function AddProduct() {
    const [category, setCategory] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [index,setIndex]= useState();
    
    const [ar, setar] = useState([]);
    const [ar2, setar2] = useState([]);
    const [inputs, setInputs] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        {console.log(name)}
        {console.log(value)}
        setInputs(values => ({ ...values, [name]: value }));
    }
    function setselect(title){
       let d;
        setar([]);
       
        for(let i=0;i<MenuItems[0].submenu.length;i++){
           
            if(title == MenuItems[0].submenu[i].title){
                d= i
                setIndex(d)
             

            }}
     
                {MenuItems[0].submenu[d].submenu?.map((x)=>(
                                                  
                    setar(values => ([ ...values,x.title] ))                    )) }

    }
    function setselect2(t,index){
        setar2([]);
       
        let x;
       
            for(let i=0;i<MenuItems[0].submenu[index].submenu.length;i++){
           
                if(t == MenuItems[0].submenu[index].submenu[i].title){
                    x= i
                    {console.log(x)}

                   
    
                }}
    


                {console.log(t)}
               { console.log(MenuItems[0].submenu[index].submenu[x].title)}
             
     
                {MenuItems[0].submenu[index].submenu[x].submenu?.map((x)=>(
                                                  
                    setar2(values => ([ ...values,x.title] ))                    )) }



                                         
                                   
                                                      
         

    }



function d(event) {
  
    handleChange(event);

    setselect(event.target.value);
 

   

}
function d2(event) {
    //  {console.log(event.target.value)}
     // {console.log(event.target.name)}
      handleChange(event);
      {console.log(index)}
      setselect2(event.target.value,index)
  
  }


       const handleChange2 = (event) => {
        const name = event.target.name;
        const value = event.target.value;
       
        setInputs(values => ({ ...values, [name]: value.split(',')
        }));
        console.log(inputs);
      
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
      const res =  await axios.post('http://localhost:5000/api/products/', inputs)
       if(res.status){   
          Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 2000,
               
              } )
              window.location.reload();  
          
              
        }
    else{
       
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          
          })
        
        };
        
    
    
}
    return (
        <>

            <Button color="success"   variant="outlined" size="small" onClick={handleOpen}>
                Aggiungi Prodotto
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button color="success" onClick={handleClose}>X</Button>

                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginBottom: 1,
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Aggiungi Prodotto
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField color="success" focused 
                                            name="title"
                                            type="text"
                                            required
                                            fullWidth
                                            label="Nome"

                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={15} sm={6}>
                                        <TextField color="success" focused 
                                            name="img"
                                            required
                                            fullWidth
                                            label="Percorso foto"
                                            autoFocus
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5}>
                                        <TextField color="success" focused 

                                            fullWidth
                                            size='large'
                                            label="Descrizione"
                                            name="desc"
                                            rows={10}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5}>
                                        <TextField color="success" focused 
                                            required
                                            fullWidth
                                            label="Brand"
                                            name="brand"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField color="success" focused 
                                            required
                                            fullWidth
                                            label="Prezzi in base al formato(separare i prezzi con una virgola)"
                                            name="price"
                                            onChange={handleChange2}
                                        />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField color="success" focused 
                                            required
                                            fullWidth
                                            label="Formato(separare il formato con una virgola)"
                                            name="size"
                                            onChange={handleChange2}
                                        />
                                    </Grid>
    
                                   
                                 
                                    <div className='FilterContainer'>
                                    <label for="Categoria: ">Categoria: </label>
                                  
                                    <select  className= 'Filters'  name="categories"
                                  
                                            onChange={(e) => d(e)}>
                                                  <option selected disabled="Selezionare">Seleziona</option>
                                                    {MenuItems[0].submenu?.map((i)=>(
                                                   
                                                   <option value={i.title}>{i.title}</option>
                                                 
                                                                            )
                                                                         )  }
                          </select>
                          </div>
                          <div className='FilterContainer'>
                          <label for="sottocategoria">Sottocategoria: </label>
                          <select   className= 'Filters'    
                                            name="subcategories"
                                            onChange={(e) => d2(e)}
                                        >
                                          <option  selected disabled="Selezionare">Seleziona</option>
                                         {ar.map((i)=>(
                                                   
                                                   <option value={i}>{i}</option>
                                                 
                                                                            )
                                                                         )  }
                                            </select>
                                            </div>
                                  
                                            <div className='FilterContainer'>
                                            <label for="sottocategoria">Sottocategoria2: </label>
                          <select          className= 'Filters'
                                            name="subcategories2"
                                            onChange={(e)=>handleChange(e)}
                                        >
                                          <option  selected disabled="Selezionare">Seleziona</option>
                                         {ar2.map((i)=>(
                                                   
                                                   <option value={i}>{i}</option>
                                                 
                                                                            )
                                                                         )  }
                                            </select>
                                            </div>



                               
                                    <Grid item xs={6} sm={5}>
                                        <TextField color="success" focused 
                                            required
                                            fullWidth
                                            label="Promo"
                                            name="promo"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5} >
                                        <TextField color="success" focused 
                                            required
                                            fullWidth
                                            label="Percentuale di sconto"
                                            name="perc"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5} >
                                        <TextField color="success" focused 
                                            required
                                            fullWidth
                                            label="Seconda descrizione"
                                            name="desc2"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5} >
                                        <TextField color="success" focused 
                                            required
                                            fullWidth
                                            label="Ingredienti"
                                            name="ingredients"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                                <Button color="success"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleSubmit}
                                >
                                    Aggiungi
                                </Button>
                               </Box>
                        </Box>
                    </Container>

                </Box>
            </Modal>
        </>

    );
}