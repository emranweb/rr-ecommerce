const init_state = {
  cartIcon: false,
  cartItems: [],
};

const cartReducer = (state = init_state, action) => {
  switch (action.type) {
    case "cart_show":
      return {
        ...state,
        cartIcon: action.payload,
      };

    case "cart_items":
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

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

export default cartReducer;
