const cartIconReducer = (state = false, action) => {
  if (action.type === "cart_show") {
    return action.payload;
  }
  return state;
};


export default cartIconReducer;