import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const exist = state.find((item) => {
        return item.id === action.payload.id;
      });
      if (exist) {
        return state.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: +item.price,
                total: item.quantity * item.price,
              }
            : item;
        });
      } else {
        return [
          ...state,
          { ...action.payload, quantity: 1, total: action.payload.price },
        ];
      }
    },
    removeToCart: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    increase: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + item.price,
            }
          : item
      );
    },
    decrease:(state,action)=>{
      return state.map(item=>{
         if(item.id===action.payload){
            return item.quantity>1 ? {...item, quantity:item.quantity -1, total:item.total - item.price} : item;
         }else{
           return item;
         }
        
      })
    }
  },
});

export const { addToCart, removeToCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
