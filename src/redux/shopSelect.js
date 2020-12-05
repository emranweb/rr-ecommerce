import { createSelector } from 'reselect';


const shopSelector = state=> state.shop;


const selectShop = createSelector(
    [shopSelector],
    shop=>shop
)

export default selectShop;