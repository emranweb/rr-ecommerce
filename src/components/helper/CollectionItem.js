import React from 'react'


function CollectionItem(props){
  return(
      <div className="preview-item">
         <img className="preview-item-image" src={props.imgUrl} />
          <h3 className="preview-item-name">{props.name}</h3>
          <p className="preview-item-price">{props.price}</p>
      </div>
  )
}

export default CollectionItem;