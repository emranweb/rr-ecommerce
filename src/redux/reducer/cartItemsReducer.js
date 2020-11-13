const cartItemsReducer = (state = [], action) => {
  if (action.type === "cart_items") {
    state.push(action.payload);
    return state;
  } else {
    return state;
  }
};

export default cartItemsReducer;
