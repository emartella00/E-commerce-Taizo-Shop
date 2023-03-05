import styled from "styled-components";
import { categories, Popular } from "../data";
import Product from "./Product";
import Radio from '@mui/material/Radio';

import axios from "axios";

import { useState, useEffect} from "react";



const Container = styled.div`
overflow-x:hidden;

background-color:whitesmoke;
align-items: center;

   
`;

const Wrapper = styled.div`

  display: flex;
  overflow-x:hidden;

  justify-content: space-between;`;



const Container3 = styled.div`


width:700px;

padding: 20px;
flex:1;
display: flex;

flex-wrap: wrap;
justify-content: space-between;



margin-top:10px;


   
`;


const Container2 = styled.div`
background-color:beige;
width:350px;
display: flex;




`;



const Products = ({cat, cat2, cat3}) => {

let arr;
  const [sort, setSort] = useState("asc");
  const [products, setProducts] = useState([]);
 const [name,setname] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});


  

  useEffect(() => {
   if(cat=="Brand"){
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? ( cat2 ? (cat3 ? (`http://localhost:5000/api/products/brand?brand=${cat3}&&category=${cat2}`) : (`http://localhost:5000/api/products?category=${cat2}`)) : ("http://localhost:5000/api/products/brand")) : ("http://localhost:5000/api/products")
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }
  else if(cat == "Promo"){

    const getProducts = async () => { try { const res = await axios.get("http://localhost:5000/api/products/promo?promo=true"); setProducts(res.data); } catch (err) {} }; getProducts();

  }
  
  
  
  else {
    const getProducts = async () => { try { const res = await axios.get( cat ? ( cat2 ? (cat3 ? (`http://localhost:5000/api/products?category=${cat}&subcategory=${cat2}&subcategory2=${cat3}`) : (`http://localhost:5000/api/products?category=${cat}&subcategory=${cat2}`)) : (`http://localhost:5000/api/products?category=${cat}`)) : ("http://localhost:5000/api/products") ); setProducts(res.data); } catch (err) {} }; getProducts();
   
  }



  }, [cat, cat2,cat3]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value2]) =>
            item[key].includes(value2)
            
          )
          
        )
      );
     
  },[products,filters,cat]);

  

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(products.reverse())
      
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price[0] - b.price[0])
    );
    } else {
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price[0] - a.price[0])
    );
      
    
    }
  }, [sort]);


  
  return (


<Container>
  <Wrapper>
<Container2>
  
<div className='FilterContainer'>
<select className= 'Filters'  onChange={(e) => setSort(e.target.value)}>
      <option value="asc"> Prezzo crescente</option>
      <option value="desc">Prezzo decrescente</option>
      <option value="newest"> Novità</option>
      
     </select>
     
  
    
     

     </div>
     
  
 
  
   
  
  
  </Container2> 

<Container3>
    
        {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            
            .map((item) => <Product item={item} key={item._id} />
            )
          }




 </Container3>  
 </Wrapper>
    </Container>
   
  );
};

export default Products;