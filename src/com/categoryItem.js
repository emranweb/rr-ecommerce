
import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart';



const CategoryItem =(props)=>{
    const {imageUrl, price, name} = props.data;
    const dispatch = useDispatch();

    return (
        <div className="category-item">
            <img src={imageUrl} alt="categor item" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <Button variant="contained" onClick={()=>dispatch(addToCart(props.data))} color="default">Add to cart</Button>
        </div>
    )
}

export default CategoryItem;