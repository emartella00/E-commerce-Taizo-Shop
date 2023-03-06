import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from "axios";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useState } from "react";
import Swal from 'sweetalert2';
import {MenuItems} from './MenuItems.js'
import "../components/Style.css";

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


export default function ModifyProduct({ product }) {
    const [index,setIndex]= useState();
    
    const [ar, setar] = useState([]);
    const [ar2, setar2] = useState([]);
   
    const [open, setOpen] = React.useState(false);
    const [inputs, setInputs] = useState({
   ttitle:product.title,
        title: product.title,
        img: product.img,
        desc: product.desc,
        price: product.price,
        size: product.size,
        brand: product.brand,
        categories: product.categories,
        subcategories: product.subcategories,
        subcategories2: product.subcategories2,
     
    promo:product.promo,
    perc:product.perc,
    pricestock:product.pricestock,
    ingredients:product.ingredients,
    desc2:product.desc2,
    });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
 function f(){
   
   
   
   
    handleSave();
    handleSave2();
 }
 
 
 function d(event) {
   
     handleChange(event);
 
     setselect(event.target.value);
  
 
    
 
 }
 function d2(event) {

       handleChange(event);
   
       setselect2(event.target.value,index)
   
   }
 

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
    }
    const handleChange2 = (event) => {
        const name = event.target.name;
        const value = event.target.value;
       
        setInputs(values => ({ ...values, [name]: value.split(',')
        }));
        console.log(inputs);

    }

    const handleSave2 = async () =>{ try{
        const res =  await axios.post(`http://localhost:5000/api/user/upd/${product._id}`,inputs)
        console.log(res.data)
            } catch(err){
           console.log( err);
       }

    }

   

    const handleSave = async () => {
        

        await axios.post(`http://localhost:5000/api/products/${product._id}`,inputs).then(function (response) {
           
        },  Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 2000,
           
          } )
        );
       
     
    }

    return (
        <>
       
            <button className='Button2' 
            onClick={handleOpen} >
                Modifica
            </button>
        
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button onClick={handleClose}>X</Button>

                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginBottom: 8,
                            }}>
                            <Typography component="h1" variant="h5">
                                Modifica Prodotto
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField color="success" focused 
                                            name="title"
                                            type="text"
                                            defaultValue={`${product.title}`}
                                            required
                                            fullWidth
                                            label="Nome"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={15} sm={6}>
                                        <TextField color="success" focused 
                                            name="img"
                                            type="text"
                                            defaultValue={`${product.img}`}
                                            required
                                            fullWidth
                                            label="Percorso foto"
                                            autoFocus
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5}>
                                        <TextField color="success" focused 
                                            type="text"

                                            fullWidth
                                            size='large'
                                            label="Descrizione"
                                            name="desc"
                                            defaultValue={`${product.desc}`}
                                            rows={10}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5} >
                                        <TextField color="success" focused 
                                            required
                                           
                                            fullWidth
                                            label="Brand"
                                            defaultValue={`${product.brand}`}
                                            name="brand"
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField color="success" focused 
                                            type="tel"
                                            required
                                            fullWidth
                                            label="Prezzo in base al formato(separare i prezzi con una virgola)"
                                            name="price"
                                            defaultValue={`${product.price}`}
                                            onChange={handleChange2}
                                        />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField color="success" focused 
                                            type="tel"
                                            required
                                            fullWidth
                                            label="Formato(separare il formato con una virgola)"
                                            name="size"
                                            defaultValue={`${product.size}`}
                                            onChange={handleChange2}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5}>
                                        <TextField color="success" focused 
                                            type="tel"
                                            required
                                            fullWidth
                                            label="Promo"
                                            name="promo"
                                            defaultValue={`${product.promo}`}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={5} >
                                        <TextField color="success" focused 
                                            required
                                           
                                            fullWidth
                                            label="Seconda descrizione"
                                            defaultValue={`${product.desc2}`}
                                            name="desc2"
                                            onChange={handleChange}
                                        />
                                    </Grid>

                             
                                    <div className='FilterContainer'>
                                    <label for="Categoria: ">Categoria ({product.categories}): </label>
                                  
                                    <select  className= 'Filters'  name="categories"
                                  
                                            onChange={(e) => d(e)}>
                                                  <option selected disabled="">Selezionare</option>
                                                    {MenuItems[0].submenu?.map((i)=>(
                                                   
                                                   <option value={i.title}>{i.title}</option>
                                                 
                                                                            )
                                                                         )  }
                          </select>
                          </div>
                          <div className='FilterContainer'>
                          <label for="sottocategoria">Sottocategoria({product.subcategories}): </label>
                          <select   className= 'Filters'    
                                            name="subcategories"
                                            onChange={(e) => d2(e)}
                                        >
                                          <option  selected disabled="">Selezionare</option>
                                         {ar.map((i)=>(
                                                   
                                                   <option value={i}>{i}</option>
                                                 
                                                                            )
                                                                         )  }
                                            </select>
                                            </div>
                                  
                                            <div className='FilterContainer'>
                                            <label for="sottocategoria">Sottocategoria2({product.subcategories2}): </label>
                          <select          className= 'Filters'
                                            name="subcategories2"
                                            onChange={(e)=>handleChange(e)}
                                        >
                                          <option  selected disabled="">Selezionare</option>
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
                                            label="Ingredienti"
                                            defaultValue={`${product.ingredients}`}
                                            name="ingredients"
                                            onChange={handleChange}
                                        />
                                    </Grid>



                                    <Grid item xs={6} sm={5}>
                                        <TextField color="success" focused 
                                            type="tel"
                                            required
                                            fullWidth
                                            label="Percentuale"
                                            name="perc"
                                            defaultValue={`${product.perc}`}
                                            onChange={handleChange}
                                        />
                                    </Grid>

                                    
                                </Grid>
                           
                                 
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'

                                    }}>
                                    <Button color="success"  
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, order: 2 }}
                                        onClick={f}

                                    >
                                        Salva
                                    </Button>
                                    <Button color="success"  
                                        type="submit"
                                        variant="outlined"
                                        sx={{ mt: 3, mb: 2, order: 1 }}
                                        onClick={handleClose}

                                    >
                                        Annulla
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Modal>
        </>
    );

}