import React from 'react';
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component.js";


function CollectionPreview (props){
     return(
         <div className="collection-container">
              <h1 className="collection-title">{props.title}</h1>
              <div className="collection-preview-items">
                {props.items.filter((item,index)=>index<4).map(item=> <CollectionItem name={item.name} imgUrl={item.imageUrl} price={item.price}/>)}
              </div>
         </div>
     )
}


export default CollectionPreview;
