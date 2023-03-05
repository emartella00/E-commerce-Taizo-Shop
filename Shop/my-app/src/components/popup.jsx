
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import {
  PayPalScriptProvider, PayPalButtons
  
} from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import style from '../components/Style.css'; 
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ButtonWrapper from "./ButtonWrapper.jsx";
const Button2= styled.button`
  width: 100%;
  padding: 10px;
  background-color:#F96C85;
  color: white;
  font-weight: 600;
`;

const initialOptions = {
    "client-id":"AUsL_m8A7arYhWt3WOKeZfp0gmc0kfQ4rsqvmMNncVbWpG8SwVYI9DCmCxXEzHH7NQcSCZXVbRpunVWs",
   intent:"capture",
    currency: "EUR",
    
  
  };


export default function PopupGfg({cart}){
   
    const user_id=useSelector((state) =>state.user.currentUser);
    const { isFetching, error } = useSelector((state) =>state.user);
  
    

if (isFetching) {

    return (
        
       <PayPalScriptProvider  options={initialOptions}  >
      <ButtonWrapper cart={cart} user_id={user_id} />
    </PayPalScriptProvider>
     

    )
   
}
else {
  return (
      <>
          <div className={style.right}>
          NON SEI LOGGATO
         <p> Per poter acquistare devi
          <span className={style.button}> <Link to ="/login" passHref>Accedere</Link></span>
                      <br />
                      o
                      <br />
                      <span className={style.button}> <Link href="/usr/register" passHref>Registrarti</Link> </span>
                      </p> 
          </div>
      </>
  )
}
};


