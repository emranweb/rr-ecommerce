import React from 'react'


function CollectionPreview (props){
     return(
         <div className="collection-container">
              <h1 className="collection-title">{props.title}</h1>
              <div>
                {props.items.map(item=><h3>{item.name}</h3>)}
              </div>
         </div>
     )
}


export default CollectionPreview;
