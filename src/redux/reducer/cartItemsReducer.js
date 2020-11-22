

const cartItemsReducer = (state = [], action) => {
  if (action.type === "cart_items") {
    return addToCart(state, action.payload);
  } else {
    return state;
  }
};

export default cartItemsReducer;

const addToCart = (items, payload) => {
  const exitItem = items.find((item) => {
    return item.id === payload.id;
  });

  if (exitItem) {
    return items.map((item) => {
      return item.id === payload.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...items, { ...payload, quantity: 1 }];
};
