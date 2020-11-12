const cartReducer = (state = true, action) => {
  if (action.type === "cart_show") {
    return action.payload;
  }
  return true;
};


export default cartReducer;