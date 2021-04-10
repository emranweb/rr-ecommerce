import React from 'react'
import Collection from "../com/collection";
import {useSelector} from "react-redux";


const ShopWrapper = ()=>{
    const shop_data = useSelector(state=>state.shop);
    return (
       <div className="shop-wrapper">
            {shop_data.map((item) => {
            return <Collection key={item.id} {...item} />;
          })}
       </div>
    )
}


export default ShopWrapper;