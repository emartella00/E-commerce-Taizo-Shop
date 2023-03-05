import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { redirect, useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { resetP } from "../redux/cartRedux";
import Swal from 'sweetalert2'



export default function ButtonWrapper({ showSpinner, cart, user_id }) {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const style = { layout: "vertical" };
  const currency = "EUR";
  const navigate = useNavigate();
  const dispatch2 = useDispatch();
  const [orderId, setOrderId] = useState(null);
  

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);

  const createOrder = async (x) => {
      
      try {
        const res = await userRequest.post("/orders", {
          userId: user_id._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
            img: item.img,
            size: item.size,
            amountp: item.price,
         
          })),
          amount: cart.total.toFixed(2),
          address: x,
         
        });
      
        setOrderId(res.data._id);
        
   
        if (res.status === 200) {
          dispatch2(resetP());
          
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Pagamento avvenuto con successo',
  showConfirmButton: false,
  timer: 1800
})
         
          navigate("/usr/${user_id}/orders",{state:{id:user_id
          }}) ;
        
      }else{
       
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
 
})
      }
          }
       catch (err) {
          console.log(err);
      }
      
    
  }

   
 




    return ( 

        <>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[cart.total, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: cart.total.toFixed(2),
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total.toFixed(2),
                method: 1,
              });
           
            });
          }}
        />
        </>
    );
};


