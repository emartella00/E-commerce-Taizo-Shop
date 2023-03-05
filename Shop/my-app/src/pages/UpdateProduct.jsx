import axios from "axios";
import React from "react";
import ModifyProduct from "../components/ModifyProduct";
import "../components/Style.css";
import AddProduct from "../components/AddProduct";
import styles from "../components/Style.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newslatter from '../components/Newslatter'
import { useState, useEffect} from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
const Container2=styled.div`

padding: 50px;
display: flex;
`;
const Tab=styled.div`
width: 100%;
border-spacing: 20px;
text-align: left;
`;


const Container=styled.div`
overflow-x:hidden;


`;
const Image2 = styled.img`
height:20%;
width:20%;
margin-left:30px;


`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;



export default function UpdateProduct() {
    const [SearchApi , setSearchApi] = useState([]);
    const [test,settest] = useState("");
    const [filterval,setfilterval] = useState([]);

    const [products, setProducts] = useState([]);


    const handleFilter=(e)=>{
        settest(e.target.value)
        if(e.target.value == ' '){
         setProducts(SearchApi)
      
        }else{const filter = SearchApi.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
       
        
        setProducts(filter)
        console.log(products)
        }
        setfilterval(e.target.value)
       }







       useEffect(()=>{
        const FetchData =() =>{
          fetch(`http://localhost:5000/api/products`)
          .then(response=> response.json())
          .then(json=>{
            setProducts(json)
            setSearchApi(json)
          })
        }
        FetchData();
       }, [])









    const handleDelete = async (id) => {

      
Swal.fire({
    title: 'Vuoi davvero eliminare il prodotto ?',
  
    showDenyButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then(async(result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      

        try {
            await axios.delete("http://localhost:5000/api/products/" +id) ;
            setProducts(products.filter((product) => product._id !== id));
            setSearchApi(products.filter((product) => product._id !== id));
            Swal.fire('Eliminato con successo!', '', 'success')
         
        } catch (err) {
            console.log(err);
        }
    }})
    };

    return (
        <Container>
        <Navbar/>
        <>
       

        <Container2>
                <div className={styles.item}>
                    <h1 className={styles.title}>Prodotti </h1>
                  
                    <AddProduct />
                    <Center>
        <div>
                    <input className="input2" placeholder="Ricerca" value={filterval} onInput={(e)=>handleFilter(e)} />
</div>
</Center>
                    <Tab>
                        <tbody>
                            <tr >
                                <th>Immagine</th>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrizione</th>
                                <th>Formati</th>
                                <th>Prezzo</th>
                                <th>Azione</th>
                            </tr>
                        </tbody>
                        {products.map((product) => (
                            <tbody key={product.id}>
                                <tr>
                                <td>
                                 <Image2 src={product.img}/>
                                </td>
                                    
                                <td>{product._id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.categories+ ","+product.subcategories+","+product.subcategories2}</td>
                                    {product.size.map((c) => (
                                    <td>{c}</td>))}
                            {product.price.map((c) => (
                                    <td>{c}</td>))}
                                    
                                    <td>
                                       
                                    <ModifyProduct product={product} key={product._id}/>



                                        <button 
                                            onClick={() => handleDelete(product._id)}
                                        >
                                            Cancella
                                        </button>
                                    
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Tab>
               
                </div>
                </Container2>
            <Newslatter/>
  <Footer/>
  
  </> 
  </Container>
    );
};