
import { Button } from '@material-ui/core';
import React from 'react'


const CategoryItem =(props)=>{
    const {imageUrl, price, name} = props.data;

    return (
        <div className="category-item">
            <img src={imageUrl} alt="categor item" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <Button variant="contained" color="default">Add to cart</Button>
        </div>
    )
}

export default CategoryItem;