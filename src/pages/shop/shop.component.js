import React from 'react';
import ShopData from "./shop-data";
import CollectionPreview from "../../components/collectoin-preview/collection-preview.component.js";


class Shop extends React.Component {
   constructor(){
       super();
       this.state = {
           collection:ShopData
       }
   }


   render(){
       return(
           <div>
               {
                 this.state.collection.map(item=> <CollectionPreview id={item.id} title={item.title} items={item.items} />)
               }
           </div>
       )
   }

}

export default Shop;