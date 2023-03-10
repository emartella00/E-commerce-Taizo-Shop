import { createSlice } from "@reduxjs/toolkit";
import {useState} from "react";
const cartSlice =
createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  
  reducers: {
    
  
    addProduct: (state, action) => {
     
      const found = state.products.find(product => product._id == action.payload._id && product.size == action.payload.size);
     
      

      if (found !== undefined){
        const qnt = parseFloat(found.quantity) + parseFloat(action.payload.quantity);
        found.quantity = qnt;
        const index = state.products.indexOf(found);
        
        state.products.splice(index, 1, found);
       
       }
       else {
      state.products.push(action.payload);
         state.quantity += 1;
       }
       state.total += action.payload.price * action.payload.quantity;   
     },
  

  rmvProduct: (state, action) => {

    for(let i=0;i<state.products.length;i++){
      if(state.products[i]._id == action.payload._id && state.products[i].size == action.payload.size){
        if (i !== undefined) {
          console.log(i);
          
          state.products.splice(i, 1);
     
          state.quantity -=1;
          state.total -= (action.payload.price * action.payload.quantity);   
        }
        
      }
    }

   
  
  },
  resetP: (state) => {
    state.products = [];
    state.quantity = 0;
    state.total = 0;
  },

}});

export const { addProduct, rmvProduct, resetP } = cartSlice.actions;
export default cartSlice.reducer;