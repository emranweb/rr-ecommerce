import { createSlice } from "@reduxjs/toolkit";

const addToCartFun = (oldItems, newItem) => {
  //check the item exist
  //   console.log(oldItems)
  //   const itemExist = oldItems.find(item=>item.id===newItem.id);
  //   console.log(itemExist)
  //   if(itemExist){
  //       //find spefic item and add quantiti
  //       oldItems.map(item=>{
  //           if(item.id === newItem.id){
  //               return {...item, quantity: item.quantity+1}
  //           }else{
  //               return item;
  //           }
  //       })
  //   }
  //   return [...oldItems.value, {...newItem.payload, quantity:1}]
};

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
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },
    removeToCart: (state, action) => {},
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
