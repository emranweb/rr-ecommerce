import { createSelector } from "reselect";

const cartItemsSelector = (state) => state.cartItems;

export const selectCatItems = createSelector(
  [cartItemsSelector],
  (item) => item
);

export const cartItemsCount = createSelector([selectCatItems], (item) =>
  item.reduce((acc, inx) => acc + inx.quantity, 0)
);
