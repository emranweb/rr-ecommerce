const cartItemsReducer = (state = [], action) => {
  if (action.type === "cart_items") {
    return addToCart(state, action.payload);
  } else {
    return state;
  }
};

export default cartItemsReducer;

const addToCart = (stateItems, payload) => {
  const existItem = stateItems.find((item) => {
    return item.id === payload.id;
  });

  if (existItem) {
    return stateItems.map((item) => {
      return item.id === payload.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...stateItems, { ...payload, quantity: 1 }];
};
