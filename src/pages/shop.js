import React from 'react'
import SHOP_DATA  from "../api/shopdata";
import Collection from '../com/collection';
import Container from "@material-ui/core/Container"



class Shop extends React.Component{
    constructor(){
        super();
        this.state = {shop_data: SHOP_DATA};
    }
    render(){
       return (
           <div className="shop-page">
               <Container maxWidth="lg">
               {this.state.shop_data.map(item=>{
                  return <Collection key={item.id} {...item}/>
               })}
               </Container>
           </div>
       )
    }
}


export default Shop;